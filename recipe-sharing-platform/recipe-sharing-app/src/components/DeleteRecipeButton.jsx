import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: '1rem', color: 'red' }}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;