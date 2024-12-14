import React from "react";const Footer = () => {
   return (
      <div id="footer">
         <div className="container">
            <div className="footer">
               <div className="main">
                  <div className="logo">
                     <img src="img/logo-bottom.svg" alt="" />
                  </div>
                  <div className="adress">
                     <p>
                        Адрес:
                        <br />
                        Республика Казахстан, г. Нур-Султан, Есильский <br />
                        район, ж.м. Шубар, ул. Нуртаса Ондасынова, д. 45
                     </p>
                  </div>
                  <div className="adress">
                     <p>
                        Телефон:
                        <br />
                        +7 (7172) 24 55 22
                        <br />
                        +7 (7172) 24 16 27
                     </p>
                  </div>
               </div>
               <p>© 2024. Все права защищены.</p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
