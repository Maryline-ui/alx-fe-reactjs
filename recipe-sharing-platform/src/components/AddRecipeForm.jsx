import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    }
    if (!instructions.trim()) {
      newErrors.instructions = 'Instructions are required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      
      console.log('New recipe submitted:', { title, ingredients, instructions });
      
      setTitle('');
      setIngredients('');
      setInstructions('');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Link to="/" className="inline-block mb-8 text-blue-500 hover:underline">
        &larr; Back to all recipes
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.title ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700 mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              id="ingredients"
              rows="6"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          <div>
            <label htmlFor="instructions" className="block text-lg font-medium text-gray-700 mb-2">
              Preparation Steps
            </label>
            <textarea
              id="instructions"
              rows="6"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.instructions ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add Recipe
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-600 text-center font-medium">Recipe submitted successfully!</p>
        )}
      </div>
    </div>
  );
};

export default AddRecipeForm;