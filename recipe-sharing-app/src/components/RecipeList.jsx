import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.ingredients}</p>
            <p>Time: {recipe.time} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
