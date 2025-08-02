import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filterByIngredient: '',
  filterByTime: '',

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
   setRecipes: (recipes) => set({ recipes }), 

  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilterByIngredient: (ingredient) => set({ filterByIngredient: ingredient }),
  setFilterByTime: (time) => set({ filterByTime: time }),
  

  get filteredRecipes() {
    return this.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      recipe.ingredients.toLowerCase().includes(this.filterByIngredient.toLowerCase()) &&
      recipe.time.toLowerCase().includes(this.filterByTime.toLowerCase())
    );
  },
}));
