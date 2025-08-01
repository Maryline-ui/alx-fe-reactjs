import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
  searchTerm: '',
  filterByIngredient: '',
  filterByTime: '',
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilterByIngredient: (ingredient) => set({ filterByIngredient: ingredient }),
  setFilterByTime: (time) => set({ filterByTime: time }),

  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
        recipe.ingredients.toLowerCase().includes(state.filterByIngredient.toLowerCase()) &&
        recipe.time.toString().includes(state.filterByTime)
      ),
    })),
  
  addRecipe: (recipe) =>
    set((state) => {
      const newRecipe = {
        ...recipe,
        id: Date.now().toString(),
      };
      return {
        recipes: [...state.recipes, newRecipe],
        filteredRecipes: [...state.recipes, newRecipe],
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const filtered = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: filtered,
        filteredRecipes: filtered,
      };
    }),
}));
