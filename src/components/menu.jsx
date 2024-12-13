import React, { useState } from "react";const Menu = () => {
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
                     <img src="img/logo.png" alt="" />
                  </a>
               </div>

               <div className="hamburger" onClick={toggleMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
               <div className={`nav ${isOpen ? "open" : ""}`}>
                  <a href="/about">О нас</a>
                  <a href="/guide">Руководство</a>
                  <a href="/activity">Деятельность</a>
                  <a id="phone" href="#">
                     <img src="img/phone.png" alt="" />
                     +7 (7171) 156 22 88
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Menu;