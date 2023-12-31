import './css/footer.css'
function Footer() {
    return (
        <footer>
            <div className="container flex">
                <div className="footer flex">
                    <div className="footerlogo">
                        <h2>Taste Trail</h2>
                        <p>
                            We provide a platform for customers to share their culinary creations and discover easy,
                            delicious recipes,
                            fostering a vibrant community of food enthusiasts.
                        </p>
                    </div>
                    <div className="footernav">
                        <h3>Recipes</h3>
                        <ul className="flex">
                            <li><a href="Category_Breakfast.html">Breakfast</a></li>
                            <li><a href="Category_Lunch.html">Lunch</a></li>
                            <li><a href="Category_Snacks.html">Dinner</a></li>
                            <li><a href="Category_Dinner.html">Breakfast</a></li>
                            <li><a href="Category_Dessert.html">Dessert</a></li>
                            <li><a href="Category_Holiday.html">Holiday & Festive Specials</a></li>
                        </ul>
                    </div>
                    <div className="footernav">
                        <h3>Legal</h3>
                        <ul className="flex">
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
