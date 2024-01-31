import './css/Slider.css';
import {useNavigate} from "react-router-dom";

const Slider = () => {
    const navigate = useNavigate();
    const sections = [
        {
            id: "breakfast",
            title: "Breakfast",
            description: "Kickstart your day with a tasty and nutritious breakfast. Explore different recipes to add variety to your mornings – from hearty oatmeal to flavorful omelets. Enjoy a delicious start to your day!.",
            imgSrc: "Breakfast.png",
            link: "/Category_breakfast"
        },
        {
            id: "lunch",
            title: "Lunch",
            description: "Savor a satisfying lunch from our diverse recipe collection, and discover new flavors to brighten up your midday break, making each meal a delightful and flavorful experience",
            imgSrc: "Lunch.png",
            link: "/Category_lunch"
        },
        {
            id: "dinner",
            title: "Dinner",
            description: "Explore our dinner recipes to create delicious and satisfying meals for the end of your day. Discover a variety of dinner options for every taste.",
            imgSrc: "Dinner.png",
            link: "/Category_dinner"
        },
        {
            id: "snacks",
            title: "Snacks",
            description: "Elevate your snacking experience with our enticing and effortlessly crafted snacks. Uncover the ideal recipes for any occasion, ensuring that each bite is a perfect blend of taste and simplicity.",
            imgSrc: "Snacks.png",
            link: "/Category_snacks"
        },
        {
            id: "dessert",
            title: "Dessert",
            description: "Indulge your sweet cravings with an extravagant dessert sampler that promises a symphony of flavors and textures. This opulent platter features an array of delights, each carefully crafted to satisfy the most discerning palate.",
            imgSrc: "Dessert.png",
            link: "/Category_dessert"
        },
    ];

    return (
        <div className="slider-container">
            <div className="slider">
                {sections.map((section, index) => (
                    <div key={index} className="slide">
                        <div className="category" onClick={() => {
                            navigate(section.link) }} style={{ backgroundImage: `url(${section.imgSrc})`}}>
                            <div className="info_wrapper">
                                <div className="info_content">

                                    <h3>{section.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;