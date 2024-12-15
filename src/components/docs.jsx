import React from "react";
const Docs = () => {
   return (
      <div id="docs">
         <div className="container">
            <div className="title">
               <div className="dot"></div>
               <h1 id="title"> Из всех разработанных документов</h1>
            </div>
            <div className="projects">
               <div className="item">
                  <div className="container">
                     <h1 id="counter">5</h1>
                     <p>положений опланово-предупредительном ремонте</p>
                  </div>
               </div>
               <div id="long" className="item">
                  <div className="container">
                     <h1 id="counter">122</h1>
                     <p>
                        122 нормативных документов в области нормирования
                        расхода материальных и энергетических ресурсов для
                        предприятий нефтегазовой отрасли
                     </p>
                  </div>
               </div>
               <div id="long" className="item">
                  <div className="container">
                     <h1 id="counter">213</h1>
                     <p>
                        нормативных документов в области обеспечения
                        промышленной безопасности и охраны труда и т.д
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Docs;
