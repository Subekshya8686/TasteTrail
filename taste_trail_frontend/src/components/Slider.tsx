import  { useState } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import './css/Slider.css';

const Slider = () => {
    const sections = [
        {
            id: "breakfast",
            title: "Breakfast",
            description: "Kickstart your day with a tasty and nutritious breakfast. Explore different recipes to add variety to your mornings – from hearty oatmeal to flavorful omelets. Enjoy a delicious start to your day!.",
            imgSrc: "Breakfast.png",
            link: "Category_Breakfast.html",
        },
        {
            id: "lunch",
            title: "Lunch",
            description: "Savor a satisfying lunch from our diverse recipe collection, and discover new flavors to brighten up your midday break, making each meal a delightful and flavorful experience.",
            imgSrc: "Lunch.png",
            link: "Category_Lunch.html",
        },
        {
            id: "dinner",
            title: "Dinner",
            description: "Savor a satisfying lunch from our diverse recipe collection, and discover new flavors to brighten up your midday break, making each meal a delightful and flavorful experience.",
            imgSrc: "Dinner.png",
            link: "Category_Lunch.html",
        },
        {
            id: "snacks",
            title: "Snacks",
            description: "Savor a satisfying lunch from our diverse recipe collection, and discover new flavors to brighten up your midday break, making each meal a delightful and flavorful experience.",
            imgSrc: "Snacks.png",
            link: "Category_Lunch.html",
        },
        {
            id: "dessert",
            title: "Dessert",
            description: "Savor a satisfying lunch from our diverse recipe collection, and discover new flavors to brighten up your midday break, making each meal a delightful and flavorful experience.",
            imgSrc: "Dessert.png",
            link: "Category_Lunch.html",
        },
        // ... Add the rest of your sections here
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % sections.length);
    };

    const prevSlide = () => {
        setCurrentSlide((current) => (current - 1 + sections.length) % sections.length);
    };

    const { title, description, imgSrc, link } = sections[currentSlide];

    return (
        <div className={`container category-section-${currentSlide + 1}`}>
            <div className="content flex">
                <div className="category-image">
                    <img src={imgSrc} alt={title} width="100%"/>
                </div>
                <div className="category-details">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <a href={link} className="explore-btn">Explore</a>
                </div>
            </div>
            <button onClick={prevSlide} style={{margin:"20px",backgroundColor:"#2a9d8f"}}>< IoIosArrowBack/></button>
            <button onClick={nextSlide} style={{backgroundColor:"#2a9d8f"}}>< IoIosArrowForward/></button>
        </div>
    );
};

export default Slider;
