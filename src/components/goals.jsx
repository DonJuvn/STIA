import React, { useState, useEffect, useRef } from "react";
const goalsData = [
   {
      id: 1,
      title: "Оптимизация производственных процессов",
      description:
         "Мы помогаем предприятиям совершенствовать внутренние процессы для снижения затрат и улучшения качества продукции.",
   },
   {
      id: 2,
      title: "Содействие промышленной безопасности",
      description:
         "Разрабатываем декларации, проводим оценку рисков и готовим документацию для обеспечения безопасности на предприятиях.",
   },
   {
      id: 3,
      title: "Развитиепрофессиональных навыков",
      description:
         "Обеспечиваем обучение в области промышленной безопасности, технического регулирования и пожарной безопасности для повышения квалификации персонала.",
   },
   {
      id: 4,
      title: "Устойчивое развитие",
      description:
         "Помогаем предприятиям разрабатывать новые бизнес-модели и увеличивать эффективность процессов за счет рационального использования ресурсов.",
   },
];

const Goals = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const servicesContainerRef = useRef(null);

   const handleScroll = () => {
      if (servicesContainerRef.current) {
         const container = servicesContainerRef.current;
         const scrollPosition = container.scrollLeft;
         const itemWidth = container.scrollWidth / goalsData.length;
         const index = Math.round(scrollPosition / itemWidth);
         setCurrentIndex(index);
      }
   };

   useEffect(() => {
      const container = servicesContainerRef.current;
      container?.addEventListener("scroll", handleScroll);

      return () => {
         container?.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div id="goals">
         <div className="container">
            <div className="title">
               <div className="dot"></div>
               <h1 id="title">Цели</h1>
            </div>
            <div className="goals" ref={servicesContainerRef}>
               {goalsData.map((service, index) => (
                  <div className="item" key={service.id}>
                     <div className="container">
                        <h1 id="title">{service.title}</h1>
                        <p>{service.description}</p>
                     </div>
                  </div>
               ))}
            </div>
            <div className="pagination">
               {goalsData.map((_, index) => (
                  <span
                     key={index}
                     className={`pagination-dot ${
                        index === currentIndex ? "active" : ""
                     }`}
                  ></span>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Goals;
