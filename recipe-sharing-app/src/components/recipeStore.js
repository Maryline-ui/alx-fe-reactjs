import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filterByIngredient: '',
  filterByTime: '',
  favorites: [],
  recommendations: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilterByIngredient: (ingredient) => set({ filterByIngredient: ingredient }),
  setFilterByTime: (time) => set({ filterByTime: time }),
  setRecipes: (recipes) => set({ recipes }),

  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  
  get filteredRecipes() {
    return this.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      recipe.ingredients.toLowerCase().includes(this.filterByIngredient.toLowerCase()) &&
      recipe.time.toLowerCase().includes(this.filterByTime.toLowerCase())
    );
  },
}));