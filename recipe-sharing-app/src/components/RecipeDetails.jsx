import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';


function RecipeDetails() {
  const { id } = useParams();
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(id);


  return (
    <button onClick={() => (isFavorite ? removeFavorite(id) : addFavorite(id))}>
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.instructions}</p>
      <DeleteRecipeButton id={recipe.id} />
      <EditRecipeForm recipe={recipe} />
    </div>
  );
}

export default RecipeDetails;
