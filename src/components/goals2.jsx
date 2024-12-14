import React, { useState, useEffect, useRef } from "react";
const Goals2 = () => {
   return (
      <div id="goals2">
         <div className="container">
            <div className="title">
               <div className="dot"></div>
               <h1 id="title">Цели</h1>
            </div>
            <div className="goals2">
               <div className="item">
                  <div className="container">
                     <h1 id="title">Надежность</h1>
                     <p>
                        Мы уделяем приоритетное внимание созданию долговременных
                        решений.
                     </p>
                  </div>
               </div>
               <div className="img">
                  <img src="img/goal1.png" alt="" />
               </div>
               <div className="item">
                  <div className="container">
                     <h1 id="title">Качество</h1>
                     <p>
                        Строгие стандарты, которые мы применяем, гарантируют
                        высокий уровень всех наших проектов.
                     </p>
                  </div>
               </div>
               <div className="img">
                  <img src="img/goal2.png" alt="" />
               </div>
               <div className="item">
                  <div className="container">
                     <h1 id="title">Клиентоориентированность</h1>
                     <p>
                        {" "}
                        Мы учитываем уникальные потребности каждого клиента,
                        предлагая персонализированные решения и внимательное
                        отношение к деталям.
                     </p>
                  </div>
               </div>
               <div className="img">
                  <img src="img/goal3.png" alt="" />
               </div>
               <div className="item">
                  <div className="container">
                     <h1 id="title">Профессиональная компетентность</h1>
                     <p>
                        Высокий профессиональный уровень наших специалистов
                        обеспечивает полное соответствие проектов строгим
                        требованиям законодательства.
                     </p>
                  </div>
               </div>
               <div className="img">
                  <img src="img/goal4.png" alt="" />
               </div>
               <div className="item">
                  <div className="container">
                     <h1 id="title"> Соблюдениесроков</h1>
                     <p>
                        Мы стремимся выполнять проекты в оптимальные сроки,
                        поддерживая бесперебойную работу наших клиентов.
                     </p>
                  </div>
               </div>
            </div>

            {/* <div className="pagination">
               {goalsData.map((_, index) => (
                  <span
                     key={index}
                     className={`pagination-dot ${
                        index === currentIndex ? "active" : ""
                     }`}
                  ></span>
               ))}
            </div> */}
         </div>
      </div>
   );
};

export default Goals2;
