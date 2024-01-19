// RecipeUploadForm.tsx

import React, {useEffect, useState} from 'react';
// import { useForm } from 'react-hook-form';
import './css/upload.css'
import axios from "axios";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

const upload: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [step2Ingredients, setStep2Ingredients] = useState<string[]>([]);


    const handleImageUpload = () => {
        const input = document.getElementById('recipePhoto') as HTMLInputElement;
        const cameraText = document.getElementById('cameraText') as HTMLParagraphElement;
        const preview = document.getElementById('uploadedImage') as HTMLImageElement;

        const file = input.files?.[0];

        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Please upload a valid image file.');
                input.value = '';
                return;
            }

            const reader = new FileReader();

            reader.onload = function (e) {
                if (e.target) {
                    preview.src = e.target.result as string;
                    preview.style.display = 'block';
                    cameraText.style.display = 'none';
                }
            };

            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        const fileInput = document.getElementById('recipePhoto') as HTMLInputElement;
        fileInput.addEventListener('change', handleImageUpload);

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            fileInput.removeEventListener('change', handleImageUpload);
        };
    }, []);



    const previewImage = () => {
        const cameraIcon = document.querySelector('.camera-icon') as HTMLElement;
        const uploadedImage = document.getElementById('uploadedImage') as HTMLImageElement;
        const cameraText = document.getElementById('cameraText') as HTMLParagraphElement;
        const inputPhoto = document.getElementById('recipePhoto') as HTMLInputElement;
        const imageContainer = document.getElementById('imageContainer') as HTMLDivElement;

        if (inputPhoto.files && inputPhoto.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                if (e.target) {
                    uploadedImage.src = e.target.result as string;
                    uploadedImage.style.display = 'block';
                    cameraIcon.style.display = 'none';
                    cameraText.style.display = 'none';

                    // Adjust the image dimensions to fit within the container
                    const containerWidth = imageContainer.clientWidth;
                    const containerHeight = imageContainer.clientHeight;
                    const imageWidth = uploadedImage.naturalWidth;
                    const imageHeight = uploadedImage.naturalHeight;

                    if (imageWidth / containerWidth > imageHeight / containerHeight) {
                        // Image is wider, adjust height
                        uploadedImage.style.width = '100%';
                        uploadedImage.style.height = 'auto';
                    } else {
                        // Image is taller, adjust width
                        uploadedImage.style.width = 'auto';
                        uploadedImage.style.height = '100%';
                    }
                }
            };

            reader.readAsDataURL(inputPhoto.files[0]);
        }
    };

    const showStep = (stepNumber: number) => {
        setStep(stepNumber);
    };

    const addToIngredientList = () => {
        const ingredientDetails = getIngredientDetails();
        displayIngredient(ingredientDetails);
        setStep2Ingredients((prevIngredients: string[]) => [...prevIngredients, ingredientDetails]);
    };

    const displayIngredient = (ingredientDetails: string) => {
        const ingredientList = document.getElementById('ingredientList') as HTMLDivElement;
        const ingredientItem = document.createElement('div');
        ingredientItem.classList.add('ingredient-item');
        ingredientItem.innerHTML = `
        <span class="ingredient-details">${ingredientDetails}</span>
    `;
        ingredientList.appendChild(ingredientItem);
    };

    const chooseFromIngredientList = () => {
        displayIngredients(step2Ingredients, document.getElementById('usedIngredients') as HTMLDivElement);
    };

    // const submitStep3 = () => {
    //     const checkedIngredients = getCheckedIngredients();
    //     console.log('Checked Ingredients:', checkedIngredients);
    //     alert('Step 3 submitted!');
    // };

    const getCheckedIngredients = () => {
        const usedIngredientsContainer = document.getElementById('usedIngredients');

        if (usedIngredientsContainer) {
            const ingredientItems = usedIngredientsContainer.getElementsByTagName('p');
            const checkedIngredients = [];

            for (const ingredientItem of ingredientItems) {
                const ingredientText = ingredientItem.textContent?.trim();
                if (ingredientText) {
                    checkedIngredients.push(ingredientText);
                }
            }

            return checkedIngredients;
        }

        return [];
    };




    const getIngredientDetails = () => {
        const ingredientQuantity = (document.getElementById('ingredientQuantity') as HTMLInputElement).value;
        const ingredientFraction = (document.getElementById('ingredientFraction') as HTMLSelectElement).value;
        const ingredientUnit = (document.getElementById('ingredientUnit') as HTMLSelectElement).value;
        const ingredientName = (document.getElementById('ingredientName') as HTMLInputElement).value;

        return `${ingredientQuantity} ${ingredientFraction} ${ingredientUnit} ${ingredientName}`;
    };

    const displayIngredients = (ingredients: string[], container: HTMLDivElement) => {
        if (ingredients.length > 0) {
            ingredients.forEach((ingredient) => {
                if (!isIngredientAlreadyPresent(ingredient, container)) {
                    const p = document.createElement('p');
                    p.textContent = ingredient;
                    container.appendChild(p);
                }
            });
        } else {
            displayNoIngredientsMessage(container);
        }
    };

    const isIngredientAlreadyPresent = (ingredient: string, container: HTMLDivElement) => {
        const existingIngredients = Array.from(container.getElementsByTagName('p')).map((p) => p.textContent);
        return existingIngredients.includes(ingredient);
    };

    const displayNoIngredientsMessage = (container: HTMLDivElement) => {
        const p = document.createElement('p');
        p.textContent = "You don't currently have any ingredients in your list";
        container.appendChild(p);
    };
    const submitStep3 = async () => {
        try {
            const recipeData = gatherRecipeData();

            // Replace the URL with your actual backend API endpoint
            const backendEndpoint = 'https://localhost:8080/content/save';

            const response = await axios.post(backendEndpoint, recipeData);

            console.log('Backend Response:', response.data);
            alert('Recipe submitted successfully!');
        } catch (error) {
            console.error('Error submitting recipe:', error);
            alert('Error submitting recipe. Please try again.');
        }
    };
    const gatherRecipeData = () => {
        // Step 1: Gather data from Step 1
        const recipeTitle = (document.getElementById('recipeTitle') as HTMLInputElement).value;
        const recipePhotoFile = (document.getElementById('recipePhoto') as HTMLInputElement).files?.[0];
        const recipeDescription = (document.getElementById('recipeDescription') as HTMLTextAreaElement).value;
        const recipeQuantityNumber = (document.getElementById('recipeQuantityNumber') as HTMLSelectElement).value;
        const recipeQuantityType = (document.getElementById('recipeQuantityType') as HTMLSelectElement).value;
        const preparationTimeHours = (document.getElementById('preparationTimeHours') as HTMLInputElement).value;
        const preparationTimeMinutes = (document.getElementById('preparationTimeMinutes') as HTMLInputElement).value;
        const categoryType = (document.getElementById('categoryType') as HTMLSelectElement).value;

        // Step 2: Gather data from Step 2 (ingredients are already being collected in addToIngredientList function)
        const gatheredIngredients = [...step2Ingredients];

        // Step 3: Gather data from Step 3
        const stepDescription = (document.getElementById('stepDescription') as HTMLTextAreaElement).value;
        const usedIngredients = getCheckedIngredients(); // Implement this function

        // Combine all data into a recipe object
        const recipeData = {
            title: recipeTitle,
            photo: recipePhotoFile, // You might want to handle file uploads differently in a real backend
            description: recipeDescription,
            quantity: {
                number: recipeQuantityNumber,
                type: recipeQuantityType,
            },
            preparationTime: {
                hours: preparationTimeHours,
                minutes: preparationTimeMinutes,
            },
            category: categoryType,
            ingredients: gatheredIngredients,
            steps: [
                {
                    description: stepDescription,
                    usedIngredients: usedIngredients,
                },
            ],
        };

        return recipeData;
    };


    return (
        <>
            <Header/>
            {/*<img src={'bg.png'}/>*/}

        <div className="container1">
            <form id="recipeForm">
                {/* Step 1 */}
                <div id="step-1" style={{ display: step === 1 ? 'block' : 'none' }}>
                    <h2>Step 1: Basics</h2>

                    <label htmlFor="recipeTitle">Give your recipe a title *</label>
                    <input type="text" id="recipeTitle" placeholder="e.g. grandma's apple pie" maxLength={55} />


                        <h2 style={{marginBottom: '50px'}}>ADD RECIPE PHOTO</h2>
                        <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
                            <div className="camera" id="camera">
                                <label htmlFor="recipePhoto" className="camera-icon" >
                                    {/* Add an image or icon for the camera here if desired */}
                                    <p style={{marginBottom:'20px', textAlign:'center', background:'#0000'}}>Upload Photo of your final dish <br/> or add it later</p>
                                </label>
                                <input type="file" id="recipePhoto" accept="image/*" style={{backgroundColor:'#ffeec3',borderColor:'#ffeec3'}} onChange={previewImage} />
                                <div id="imageContainer" style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden', marginTop: '10px' }}>
                                    <img id="uploadedImage" style={{ width: '100%', height: 'auto', display: 'none' }} alt="Uploaded Image" />
                                </div>
                            </div>
                        </div>


                    <label htmlFor="recipeDescription">Recipe Description *</label>
                    <textarea id="recipeDescription" rows={5} maxLength={30} placeholder="Describe your recipe..." required></textarea>

                    <label htmlFor="recipeQuantity">Recipe Quantity *</label>
                    <p>Choose between portions (satisfying amount per person) or pieces (e.g. a piece of cake).</p>
                    <div style={{ display: 'flex' }}>
                        <input type="number" id="recipeQuantityNumber" min={0} step={1} placeholder="Serivngs" required />
                        <select id="recipeQuantityType">
                            <option value="portions">Portions</option>
                            <option value="pieces">Pieces</option>
                        </select>
                    </div>

                    <label htmlFor="preparationTime">Preparation Time *</label>
                    <div style={{ display: 'flex' }}>
                        <input type="number" id="preparationTimeHours" min={0} step={1} placeholder="Hours" required />
                        <input type="number" id="preparationTimeMinutes" min={0} step={1} placeholder="Minutes" required />
                    </div>

                    <label htmlFor="categories">Category *</label>
                    <div style={{ display: 'flex' }}>
                        <select id="categoryType">
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snacks">Snacks</option>
                            <option value="desserts">Desserts</option>
                            <option value="holiday&festives">Holidays and Festives</option>
                        </select>
                    </div>

                    <button type="button" onClick={() => showStep(2)}>
                        Next
                    </button>
                </div>

                {/* Step 2 */}
                <div id="step-2" style={{ display: step === 2 ? 'block' : 'none' }}>
                    <h2>Step 2: Ingredients</h2>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, marginRight: 20 }}>
                            <label htmlFor="ingredientQuantity">Quantity *</label>
                            <div style={{ display: 'flex' }}>
                                <input type="number" id="ingredientQuantity" min={0} placeholder={'Quantity'} required />
                                <select id="ingredientFraction">
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
                            <select id="ingredientUnit">
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
                            <input type="text" id="ingredientName" placeholder="e.g. flour" maxLength={55} required />
                        </div>
                    </div>

                    <button type="button" onClick={addToIngredientList}>
                        Add to List
                    </button>

                    {/* Display Ingredients List */}
                    <div id="ingredientList">
                        <h3>Ingredients</h3>
                        {/* Display ingredients with icons for delete and edit */}
                        {/* For now, it's just a placeholder; you can update this based on your UI requirements */}
                        <div className="ingredient-item">
                        </div>
                    </div>

                    <button type="button" onClick={() => showStep(1)}>
                        Previous
                    </button>
                    <button type="button" onClick={() => showStep(3)}>
                        Next
                    </button>
                </div>
                {/* Step 3 */}
                <div id="step-3" style={{ display: step === 3 ? 'block' : 'none' }}>
                    <h2>Step 3: Steps</h2>

                    <label htmlFor="stepDescription">Step Description *</label>
                    <textarea id="stepDescription" rows={5} maxLength={500} placeholder="Describe the cooking steps..." required></textarea>

                    {/* Used in This Step */}
                    <div id="usedIngredients">
                        <h3>Used in This Step</h3>
                        {/* Ingredients will be dynamically inserted here */}
                        <button type="button" onClick={chooseFromIngredientList}>
                            Choose from your Ingredient List
                        </button>
                    </div>

                    {/* Modal for choosing ingredients from the list */}
                    <div id="ingredientModal" style={{ display: 'none' }}>
                        <h3>Choose Ingredients</h3>
                        <div id="ingredientListModal"></div>
                    </div>

                    {/* Add your Step 3 form fields here */}

                    <button type="button" onClick={() => showStep(2)}>
                        Previous
                    </button>
                    <button type="button" onClick={submitStep3}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
            <Footer/>
            </>
    );
};

export default upload;
