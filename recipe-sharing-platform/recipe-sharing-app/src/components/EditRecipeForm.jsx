// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function EditRecipeForm({ recipe }) {
  const [title, setTitle] = useState(recipe.title);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    updateRecipe({
      id: recipe.id,
      title,
      instructions,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      />
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditRecipeForm;