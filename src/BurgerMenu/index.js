import { useState } from "react";
import "./style.css";
import burgerImage from "./images/menu-burger.png";

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
                            <a className="listItem" href="#">Home</a>
                        </li>
                        <li>
                            <a className="listItem" href="#">Add training</a>
                        </li>
                        <li>
                            <a className="listItem" href="#">Training history</a>
                        </li>
                    </ul>
                )
            }
        </div >
    );
}

export default BurgerMenu;