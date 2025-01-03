import React, { useState } from "react";import { Link } from "react-router-dom"; // Import Link for navigation

const Menu = () => {
   const [isOpen, setIsOpen] = useState(false); // Track if the menu is open or closed

   const toggleMenu = () => {
      setIsOpen(!isOpen); // Toggle the menu state
   };

   return (
      <div id="menu">
         <div className="container">
            <div className="menu">
               <div className="logo">
                  <a href="/">
                     <img src="img/logo.svg" alt="Logo" />
                  </a>
               </div>

               <button className="menu-toggle" onClick={toggleMenu}>
                  Меню <img src="img/link.svg" alt="Menu icon" />
               </button>

               {/* Conditionally render the navigation */}
               <div className={`nav ${isOpen ? "open" : "closed"}`}>
                  <div className="container">
                     <div className="logo" onClick={toggleMenu}>
                        <img src="img/logo.svg" alt="Logo" />
                     </div>
                     <button className="menu-toggle" onClick={toggleMenu}>
                        Закрыть <img src="img/link.svg" alt="Close icon" />
                     </button>
                     <div className="navigation">
                        <Link onClick={toggleMenu} to="/">
                           Главная
                        </Link>{" "}
                        {/* Link to Home */}
                        <Link onClick={toggleMenu} to="/about">
                           О компании
                        </Link>{" "}
                        {/* Link to About */}
                        <Link onClick={toggleMenu} to="/projects">
                           Проекты
                        </Link>
                        <Link onClick={toggleMenu} to="/services">
                           Услуги
                        </Link>{" "}
                        {/* Link to Services */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Menu;
