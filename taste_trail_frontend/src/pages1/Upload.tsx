import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import './css/upload.css';

const Upload = () => {
    const { register, handleSubmit, formState } = useForm();
    const [ingredientsList, setIngredientsList] = useState<string[]>([]);
    const saveData = useMutation((requestData: any) => {
        return axios.post('http://localhost:8080/content/save', requestData, {});
    });

    const addToIngredientList = () => {
        const ingredientDetails = getIngredientDetails();
        setIngredientsList((prevList) => [...prevList, ingredientDetails]);
    };

    const getIngredientDetails = () => {
        const ingredientQuantity = (document.getElementById('ingredientQuantity') as HTMLInputElement).value;
        const ingredientFraction = (document.getElementById('ingredientFraction') as HTMLSelectElement).value;
        const ingredientUnit = (document.getElementById('ingredientUnit') as HTMLSelectElement).value;
        const ingredientName = (document.getElementById('ingredientName') as HTMLInputElement).value;

        return `${ingredientQuantity} ${ingredientFraction} ${ingredientUnit} ${ingredientName}`;
    };

    const onSubmit: SubmitHandler<any> = async (data) => {
        try {
            console.log(ingredientsList)
            // Add the ingredients list to the data before submitting
            const formData = { ...data, ingredientsList:ingredientsList.map(i=>{
                const splitsData=i.split(" ");
                return {
                    ingredientName:splitsData[3],
                    ingredientQuantity:splitsData[0],
                    ingredientFraction:splitsData[1],
                    ingredientUnit:splitsData[2]
                }
                }) };


            // Handle form submission using your saveData mutation
            saveData.mutate(formData);

            // Reset ingredientsList after successful submission
            setIngredientsList([]);
        } catch (error) {
            // Handle any submission error
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className={"Main"}>
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="recipeTitle">Give your recipe a title *</label>
                        <input type="text" id="recipeTitle" placeholder="e.g. grandma's apple pie" maxLength={55}required{...register("recipeTitle")} />

                        <label htmlFor="recipeTitle">Give your recipe a image *</label>
                        <input type="url" id="recipePhoto" accept="image/*" required{...register("recipePhoto")}/>

                        <label htmlFor="recipeDescription">Recipe Description *</label>
                        <textarea id="recipeDescription" rows={5} maxLength={1000} placeholder="Describe your recipe..." required{...register("recipeDescription")}/>

                        <label htmlFor="recipeQuantity">Recipe Quantity *</label>
                        <p>Choose between portions (satisfying amount per person) or pieces (e.g. a piece of cake).</p>
                        <div style={{ display: 'flex' }}>
                            <input type="number" id="recipeQuantityNumber" min={0} step={1} placeholder="Serivngs" required{...register("recipeQuantityNumber")} />
                            <select id="recipeQuantityType"{...register("recipeQuantityType")}>
                                <option value="portions">Portions</option>
                                <option value="pieces">Pieces</option>
                            </select>
                        </div>


                        <label htmlFor="preparationTime">Preparation Time *</label>
                        <div style={{ display: 'flex' }}>
                            <input type="number" id="preparationTimeHours" min={0} step={1} placeholder="Hours" required {...register("preparationTimeHours")} />
                            <input type="number" id="preparationTimeMinutes" min={0} step={1} placeholder="Minutes" required{...register("preparationTimeMinutes")}  />
                        </div>

                        <label htmlFor="categories">Category *</label>
                        <div style={{ display: 'flex' }}>
                            <select id="categoryType" required{...register("categoryType")}>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snacks">Snacks</option>
                                <option value="desserts">Desserts</option>
                                <option value="holiday&festives">Holidays and Festives</option>
                            </select>
                        </div>

                        <div style={{ flex: 1, marginRight: 20 }}>
                            <label htmlFor="ingredientQuantity">Quantity *</label>
                            <div style={{ display: 'flex' }}>
                                <input type="number" id="ingredientQuantity" min={0} placeholder={'Quantity'} required {...register("ingredientQuantity")}/>
                                <select id="ingredientFraction"{...register("ingredientFraction")}>
                                    <option value="0">0</option>
                                    <option value="1/2">1/2</option>
                                    <option value="1/3">1/3</option>
                                    <option value="1/4">1/4</option>
                                    <option value="1/8">1/8</option>
                                    <option value="2/3">2/3</option>
                                    <option value="3/4">3/4</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ flex: 1, marginRight: 20 }}>
                            <label htmlFor="ingredientUnit">Unit *</label>
                            <select id="ingredientUnit" required {...register("ingredientUnit")}>
                                <option value="kg">kg (Kilogram)</option>
                                <option value="g">g (Gram)</option>
                                <option value="lb">lb (Pounds)</option>
                                <option value="oz">oz (Ounces)</option>
                                <option value="tsp">tsp (Teaspoon)</option>
                                <option value="tbsp">tbsp (Tablespoon)</option>
                                <option value=" floz">fl oz (Fluid Ounces)</option>
                                <option value="c">c (Cup)</option>
                                <option value="pint">pint (1/8 gallon [liquid])</option>
                                <option value="qt">qt (Quart)</option>
                                <option value="gal">gal (Gallon)</option>
                                <option value="ml">ml (Milliliters)</option>
                                <option value="l">l (Liters)</option>
                                <option value="°F">°F (Fahrenheit)</option>
                                <option value="°C">°C (Celsius)</option>
                                <option value="Dozen">Dozen</option>
                                <option value="Count">Count</option>
                                {/* Add more units as needed */}
                            </select>
                        </div>

                        <div style={{ flex: 1 }}>
                            <label htmlFor="ingredientName">Ingredient *</label>
                            <input type="text" id="ingredientName" placeholder="e.g. flour" maxLength={55} required {...register("ingredients")}/>
                        </div>

                        <button type="button" onClick={addToIngredientList}>
                            Add to List
                        </button>

                        {/* Display ingredients list */}
                        <div id="ingredientsContainer">
                            {ingredientsList.map((ingredient, index) => (
                                <p key={index}>{ingredient}</p>
                            ))}
                        </div>

                        <label htmlFor="stepDescription">Step Description *</label>
                        <textarea id="stepDescription" rows={5} maxLength={500} placeholder="Describe the cooking steps..." required {...register("stepDescription")}/>

                        <button>Submit</button>
                    </form>
                </div>
            </div>

    );
};

export default Upload;
