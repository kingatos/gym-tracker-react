import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./style.css";
import burgerImage from "./images/menu-burger.png";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
   
  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [isOpen]);

  const handleClick = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  if (isMobile) {
    return (
      <div className="burgerArea">
        <button onClick={handleClick} className="buttonButton">
          <img
            src={burgerImage}
            className="burgerButton--img"
            alt="burger button"
          />
        </button>
        {isOpen && (
          <ul className="list">
            <li>
              <Link to="/gym-tracker-react" className="listItem">
                home
              </Link>
            </li>
            <li>
              <Link to="/body-info" className="listItem">
                know your body
              </Link>
            </li>
            <li>
              <Link to="/bmi-calculator" className="listItem">
                know your BMI
              </Link>
            </li>
          </ul>
        )}
      </div>
    );
  }

if (isTablet) {
  return (
    <div className="burgerArea">
          <ul className="list">
            <li>
              <Link to="/home-page" className="listItem">
                home
              </Link>
            </li>
            <li>
              <Link to="/body-info" className="listItem">
                know your body
              </Link>
            </li>
            <li>
              <Link to="/bmi-calculator" className="listItem">
                know your BMI
              </Link>
            </li>
          </ul>
      </div>
    );
  }
}


export default BurgerMenu;
