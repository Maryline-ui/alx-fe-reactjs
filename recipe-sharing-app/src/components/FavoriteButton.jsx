import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }));

  const isFavorite = favorites.includes(recipeId);

  return (
    <button onClick={() => isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)}>
      {isFavorite ? '★ Unfavorite' : '☆ Favorite'}
    </button>
  );
};

export default FavoriteButton;

