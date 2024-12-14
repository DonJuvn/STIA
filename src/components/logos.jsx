import React, { useEffect } from "react";
const logosData = [
   { id: 1, src: "img/logo1.png" },
   { id: 2, src: "img/logo2.png" },
   { id: 3, src: "img/logo3.png" },
   { id: 4, src: "img/logo4.png" },
   { id: 5, src: "img/logo1.png" },
   { id: 6, src: "img/logo2.png" },
   { id: 7, src: "img/logo3.png" },
   { id: 8, src: "img/logo4.png" },
   { id: 9, src: "img/logo1.png" },
   { id: 10, src: "img/logo2.png" },
   { id: 11, src: "img/logo3.png" },
   { id: 12, src: "img/logo4.png" },
   { id: 13, src: "img/logo1.png" },
   { id: 14, src: "img/logo2.png" },
   { id: 15, src: "img/logo3.png" },
   { id: 16, src: "img/logo4.png" },
];

const Logos = () => {
   return (
      <div id="logos">
         <div className="container">
            <h1 id="title">Партнеры</h1>
            <div className="logos">
               {logosData.map((logo) => (
                  <div className="item" key={logo.id}>
                     <img src={logo.src} alt="" />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Logos;
