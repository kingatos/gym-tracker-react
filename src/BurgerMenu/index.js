import { useState } from "react";
import "./style.css";
import burgerImage from "./images/menu-burger.png";
import { Link } from "react-router-dom";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="burgerArea">
            <button
                onClick={handleClick}
                className="buttonButton"
            >
                <img src={burgerImage}
                    className="burgerButton--img"
                    alt="burger button"
                />
            </button>
            {
                isOpen && (
                    <ul className="list">
                        <li>
                        <Link to="/body-info" className="listItem" >know your body</Link>
                        </li>
                        <li>
                        <Link to="/bmi-calculator" className="listItem">know your BMI</Link>
                        </li>
                    </ul>
                )
            }
        </div >
    );
}

export default BurgerMenu;