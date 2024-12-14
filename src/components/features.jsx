import React from "react";
const featuresData = [
   {
      id: 1,
      title: "01",
      description: "Эффективные решения и долгосрочный результат",
   },
   {
      id: 2,
      title: "02",
      description: "Комплексный подход при оказании услуг",
   },
   {
      id: 3,
      title: "03",
      description: "Особое внимание к специфике Вашей организации",
   },
   {
      id: 4,
      title: "04",
      description: "Компетентность и высокий профессиональный уровень",
   },
   {
      id: 5,
      title: "05",
      description: "Исполнение в оптимально сжатые сроки",
   },
   {
      id: 6,
      title: "06",
      description: "Консультация в рамках оказываемых услуг",
   },
];

const Features = () => {
   return (
      <div id="features">
         <div className="container">
            <h1 id="title">
               <span>Преимущества</span>
            </h1>
            <div className="features">
               {featuresData.map((feature) => (
                  <div className="item" key={feature.id}>
                     <p id="grey">({feature.title})</p>
                     <p>{feature.description}</p>
                  </div>
               ))}
               <img src="img/item-bg2.svg" alt="" />
            </div>
         </div>
      </div>
   );
};

export default Features;
