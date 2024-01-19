import { MdDelete, MdModeEdit } from 'react-icons/md';
import { RiTimerLine } from 'react-icons/ri';

interface Recipe {
    id: number;
    title: string;
    category: string;
    duration: number;
    image: string;
}

interface RecipeListProps {
    recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
    return (
        <div className="recipelist">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="recipelist-card flex">
                    <div className="recipelist-img">
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                    <div className="recipelist-info flex">
                        <label className="tlabel">{recipe.title}</label>
                        <h2>Category: {recipe.category}</h2>
                        <ul className="flex">
                            <li>
                                <RiTimerLine size="1rem" />
                                <i>{recipe.duration} Mins</i>
                            </li>
                        </ul>
                    </div>
                    <div className="edit-delete">
                        <button>
                            <MdDelete size="2rem" />
                        </button>
                        <button>
                            <MdModeEdit size="2rem" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
