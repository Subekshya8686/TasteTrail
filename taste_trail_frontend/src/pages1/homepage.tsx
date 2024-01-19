import './css/homepage.css'; // Import your stylesheets as needed
import './css/darkmode.css';
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
function Homepage(){
    return (
        <>
        <header>
            <Header />
        </header>


        {/*// <!-- Taste Trail Section -->*/}
        {/*// <!-- <div class="container category-section taste-trail"> -->*/}
        <div className="content-flex">
            <div className="category-details">
                <h1>Taste Trail</h1>
                <p>Explore a world of delightful flavors and culinary adventures. <br/>Join Taste Trail to discover mouth-watering recipes that will tantalize your taste buds.</p>
                <a href={"LoginRegister.tsx"} className="explore-btn1">Explore</a>
            </div>
            <div className="category-image">
                <img src={"Main.png"} alt="Delicious Food" width="100%"/>
            </div>
        </div>


    {/*// <!-- Other Category Sections (e.g., Breakfast, Lunch, Snacks, Dinner) -->*/}
    {/*// <!-- Breakfast Section -->*/}
    <div className="container category-section-one">
        <div className="content flex">
            <div className="category-image">
                <img src={"Breakfast.png"} alt="Breakfast" width="100%"/>
            </div>
            <div className="category-details">
                <h1>Breakfast</h1>
                <p>Kickstart your day with a tasty and nutritious breakfast. Explore different recipes to add variety to your mornings – from hearty oatmeal to flavorful omelets. Enjoy a delicious start to your day!.</p>
                <a href={"Category_Breakfast.html"} className="explore-btn">Explore</a>
            </div>
        </div>
    </div>

    {/*// <!-- Lunch Section -->*/}
            <div className="container category-section-two">
                <div className="content flex">
                    <div className="category-details">
                        <h1>Lunch</h1>
                <p>Savor a satisfying lunch from our diverse recipe collection, and discover new flavors to brighten up your midday break, making each meal a delightful and flavorful experience.</p>
                <a href={"Category_Lunch.html"} className="explore-btn">Explore</a>
            </div>
            <div className="category-image">
                <img src={"Lunch.png"} alt="Lunch" width="100%"/>
            </div>
        </div>
    </div>

    {/*// <!-- Snacks Section -->*/}
            <div className="container category-section-three">
        <div className="content flex">
            <div className="category-image">
                <img src={"Snacks.png"} alt="Snacks" width="80%"/>
            </div>
            <div className="category-details">
                <h1>Snacks</h1>
                <p>Elevate your snacking experience with our enticing and effortlessly crafted snacks. Uncover the ideal recipes for any occasion, ensuring that each bite is a perfect blend of taste and simplicity.</p>
                <a href="Category_Snacks.html" className="explore-btn">Explore</a>
            </div>
        </div>
    </div>

    {/*// <!-- Dinner Section -->*/}
            <div className="container category-section-four">
        <div className="content flex">
            <div className="category-details">
                <h1>Dinner</h1>
                <p>Explore our dinner recipes to create delicious and satisfying meals for the end of your day. Discover a variety of dinner options for every taste.</p>
                <a href="Category_Dinner.html" className="explore-btn">Explore</a>
            </div>
            <div className="category-image">
                <img src={"Dinner.png"} alt="Dinner" width="78%"/>
            </div>
        </div>
    </div>

    {/*// <!-- Dessert Section -->*/}
            <div className="container category-section-five">
        <div className="content flex">
            <div className="category-image">
                <img src={"Dessert.png"} alt="Dessert" width="78%"/>
            </div>
            <div className="category-details">
                <h1>Dessert</h1>
                <p>Indulge your sweet cravings with an extravagant dessert sampler that promises a symphony of flavors and textures. This opulent platter features an array of delights, each carefully crafted to satisfy the most discerning palate.</p>
                <a href="Category_Dessert.html" className="explore-btn">Explore</a>
            </div>

        </div>
    </div>

    {/*// <!-- Footer Section -->*/}
            <Footer/>
            </>

    );
}

export default Homepage;
