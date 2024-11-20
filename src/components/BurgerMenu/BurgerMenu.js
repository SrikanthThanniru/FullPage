import React, { useState } from "react";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuOptions = ["Home", "About", "Services", "Contact"];

  return (
    <div className="burger-menu-container">
      {/* Burger Icon */}
      <button className="burger-icon" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Menu Options */}
      <div className={`menu-options ${isMenuOpen ? "open" : ""}`}>
        {menuOptions.map((option) => (
          <a
            key={option}
            href={`#${option.toLowerCase()}`}
            className="menu-item"
            onClick={() => setIsMenuOpen(false)} // Close menu on item click
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
