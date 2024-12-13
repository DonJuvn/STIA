import React, { useState } from "react";
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

               <div className={`nav ${isOpen ? "open" : "closed"}`}>
                  <div className="container">
                     <div className="logo" onClick={toggleMenu}>
                        <img src="img/logo.svg" alt="" />
                     </div>
                     <button className="menu-toggle" onClick={toggleMenu}>
                        Закрыть
                        <img src="img/link.svg" alt="" />
                     </button>
                     <div className="navigation">
                        <a href="/">Главная</a>
                        <a href="/about">О компании</a>
                        <a href="/projects">Проекты</a>
                        <a href="/services">Услуги</a>
                     </div>
                     <div className="contacts">
                        <a>Телефон:</a>
                        <a href="#">+7 (7172) 24 55 22</a>
                        <a href="#">+7 (7172) 24 16 27</a>
                     </div>
                     <p>© 2024. Все права защищены.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Menu;
