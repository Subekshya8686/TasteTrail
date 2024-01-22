import './css/footer.css'
<<<<<<< HEAD
=======
import {useNavigate} from "react-router-dom";

>>>>>>> 2e4d3ba95c87b2c4345da919dc97446dedb5475d

function Footer() {

    const navigate = useNavigate();

    return (
        <footer>
            <div className="container flex">
                <div className="footer flex">
                    <div className="footerlogo">
                        <h2>Taste Trail</h2>
                        <p>
                            Discover the essence of Nepali cuisine as TasteTrail invites you to savor a diverse
                            array of recipes. Experience the heart of Nepal's culinary heritage at your fingertips.
                        </p>
                    </div>
                    <div className="footernav">
                        <h3>Recipes</h3>
                        <ul className="flex">
                            <li><a onClick={() => {
                                navigate("/category_breakfast") }}>Breakfast</a></li>
                            <li><a onClick={() => {
                                navigate("/category_lunch") }}>Lunch</a></li>
                            <li><a onClick={() => {
                                navigate("/category_snacks") }}>Snacks</a></li>
                            <li><a onClick={() => {
                                navigate("/category_dinner") }}>Dinner</a></li>
                            <li><a onClick={() => {
                                navigate("/category_dessert") }}>Dessert</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
