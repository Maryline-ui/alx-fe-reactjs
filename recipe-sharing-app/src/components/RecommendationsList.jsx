import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

function RecommendationsList() {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const recommendations = useRecipeStore((state) => state.recommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet.</p>
      )}
    </div>
  );
}

export default RecommendationsList;
