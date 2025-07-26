import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const setFilterByIngredient = useRecipeStore(state => state.setFilterByIngredient);
  const setFilterByTime = useRecipeStore(state => state.setFilterByTime);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = () => {
    filterRecipes(); // Call filter on every input update
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleChange();
        }}
      />
      <input
        type="text"
        placeholder="Filter by ingredient"
        onChange={(e) => {
          setFilterByIngredient(e.target.value);
          handleChange();
        }}
      />
      <input
        type="text"
        placeholder="Filter by time (e.g. 30)"
        onChange={(e) => {
          setFilterByTime(e.target.value);
          handleChange();
        }}
      />
    </div>
  );
};

export default SearchBar;

