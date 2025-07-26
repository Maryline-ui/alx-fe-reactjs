// src/components/RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useState } from 'react';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>

      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? 'Cancel Edit' : 'Edit Recipe'}
      </button>

      {isEditing && <EditRecipeForm recipe={recipe} />}

      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
}

export default RecipeDetails;
