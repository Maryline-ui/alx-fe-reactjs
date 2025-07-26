import { useRecipeStore } from './recipeStore';

function RecipeList() {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            <p>Time: {recipe.time} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
