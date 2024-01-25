import './css/homepage.css'; // Import your stylesheets as needed
import './css/darkmode.css';
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import Slider from "../components/Slider.tsx";

function Homepage(){
    return (
        <>
        <header>
            <Header />
        </header>

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

            <div className="content-flex-one">
                <Slider/>
            </div>

            <Footer/>
            </>

    );
}

export default Homepage;
