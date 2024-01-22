import { MdDelete, MdModeEdit } from 'react-icons/md';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

interface Recipe {
    id: number;
    recipeTitle: string;
    categoryType: string;
    recipePhoto: string;
}

const RecipeList: React.FC = () => {
    const navigate = useNavigate();

    const { data, refetch } = useQuery({
        queryKey: ['LIST_RECIPES'],
        queryFn: () => {
            return axios.get('http://localhost:8080/content');
        },
    });

    const deleteRecipe = useMutation({
        mutationKey: ['DELETE_RECIPE'],
        mutationFn: (id: number) => {
            return axios.delete(`http://localhost:8080/content/${id}`);
        },
    });

    const handleEdit = (id: number) => {
        navigate(`/admin/contentedit/${id}`);
    };

    return (
        <>
            {/*<button onClick={() => navigate('/admin/contentCreate')}>Upload Recipe</button>*/}

            <div className="recipelist">
                {data?.data?.data?.map((recipe: Recipe) => (
                    <div key={recipe.id} className="recipelist-card flex">
                        <div className="recipelist-img">
                            <img src={recipe.recipePhoto} alt={recipe.recipeTitle} />
                        </div>
                        <div className="recipelist-info flex">
                            <label className="tlabel">{recipe.recipeTitle}</label>
                            <h2>Category: {recipe.categoryType}</h2>
                        </div>
                        <div className="edit-delete">
                            <button onClick={() => deleteRecipe.mutate(recipe.id, { onSuccess: refetch })}>
                                <MdDelete size="2rem" />
                            </button>
                            <button onClick={() => handleEdit(recipe.id)}>
                                <MdModeEdit size="2rem" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RecipeList;
