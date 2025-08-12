import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Recipe not found!</h1>
        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="inline-block mb-8 text-blue-500 hover:underline">
        &larr; Back to all recipes
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />
        <div className="p-6 md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{recipe.summary}</p>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-600">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;