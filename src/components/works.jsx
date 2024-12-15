import React from "react";const Works = () => {
   return (
      <div id="works">
         <div className="container">
            <div className="title">
               <div className="dot"></div>
               <h1 id="title">А также проведены следующие работы</h1>
            </div>
            <div className="projects">
               <div className="item">
                  <div className="container">
                     <h1 id="counter">126</h1>
                     <p>
                        учетная регистрация 126 стандартов иностранных
                        государств
                     </p>
                  </div>
               </div>
               <div className="item">
                  <div className="container">
                     <h1 id="counter">7</h1>
                     <p>расчетов величин пожарных рисков</p>
                  </div>
               </div>
               <div className="item">
                  <div className="container">
                     <h1 id="counter">13</h1>
                     <p>услуг по дефектоскопии (11000 объектов)</p>
                  </div>
               </div>
               <div id='long' className="item">
                  <div className="container">
                     <h1 id="counter">2222</h1>
                     <p>
                        обучение 2222 сотрудников нефтегазовых и консалтинговых
                        компаний в области промышленной безопасности и охраны
                        труда
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Works;
