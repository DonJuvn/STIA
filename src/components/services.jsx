import React, { useState, useEffect, useRef } from "react";
const servicesData = [
   {
      id: 1,
      title: "Разработка документов по стандартизации",
      description:
         "Предлагаем услуги по созданию технических условий, стандартов организации и другой нормативной документации. Обеспечиваем соответствие требованиям законодательства, учитываем специфику вашей деятельности. Гарантируем качество и соблюдение сроков.",
   },
   {
      id: 2,
      title: "Обеспечение промышленной безопасности",
      description:
         "Предоставляем услуги по разработке и внедрению мероприятий для обеспечения промышленной безопасности. Гарантируем соответствие требованиям законодательства и снижение рисков на производстве.",
   },
   {
      id: 3,
      title: "Охрана труда",
      description:
         "Оказываем услуги по организации и поддержанию системы охраны труда на предприятии. Помогаем соблюдать требования законодательства, минимизировать риски и обеспечивать безопасность сотрудников.",
   },
   {
      id: 4,
      title: "Расчет и оценка  рисков",
      description:
         "Предоставляем услуги по анализу, расчету и оценке рисков на производстве. Обеспечиваем точные данные для принятия решений, снижения рисков и повышения безопасности.",
   },
   {
      id: 5,
      title: "Нормирование",
      description:
         "Оказываем услуги по разработке и внедрению норм труда, материальных и производственных ресурсов. Помогаем повысить эффективность работы и оптимизировать затраты.",
   },
   {
      id: 6,
      title: "Нормоконтроль",
      description:
         "Проводим проверку документации на соответствие установленным стандартам и нормативным требованиям. Обеспечиваем качество и точность оформления документов.",
   },
   {
      id: 7,
      title: "Интегрированная система менеджмента",
      description:
         "Оказываем услуги по разработке, внедрению и поддержке интегрированных систем менеджмента в соответствии с международными стандартами (ISO).",
   },
   {
      id: 8,
      title: "Технический перевод",
      description:
         "Мы предоставляем услуги профессионального технического перевода, гарантируя точность, использование отраслевой терминологии и соответствие стандартам.",
   },
];

const Services = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const servicesContainerRef = useRef(null);

   const handleScroll = () => {
      if (servicesContainerRef.current) {
         const container = servicesContainerRef.current;
         const scrollPosition = container.scrollLeft;
         const itemWidth = container.scrollWidth / servicesData.length;
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
      <div id="services">
         <div className="container">
            <div className="title">
               <div className="dot"></div>
               <h1 id="title">Услуги</h1>
            </div>
            <div className="services" ref={servicesContainerRef}>
               {servicesData.map((service, index) => (
                  <div className="item" key={service.id}>
                     <div className="container">
                        <h1 id="title">{service.title}</h1>
                        <p>{service.description}</p>
                     </div>
                     <img src="img/item-bg.svg" alt="" />
                  </div>
               ))}
            </div>
            <div className="pagination">
               {servicesData.map((_, index) => (
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

export default Services;
