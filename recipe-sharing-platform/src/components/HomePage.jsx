import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8 text-gray-800">Our Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
                <p className="text-gray-600 leading-relaxed">{recipe.summary}</p>
                <div className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md text-center hover:bg-blue-600 transition-colors duration-300">
                  View Recipe
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;