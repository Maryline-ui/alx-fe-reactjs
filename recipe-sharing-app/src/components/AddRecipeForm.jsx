// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now().toString(), // ✅ Unique ID using timestamp
      title,
      instructions,
    };

    addRecipe(newRecipe);
    setTitle('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
