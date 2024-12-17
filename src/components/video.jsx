import React from "react";
const Video = () => {
   return (
      <div id="video">
         <div className="video">
            <video autoPlay muted loop playsInline>
               <source src="img/bg.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            <h1>
               ТОО “Стройинжиниринг Астана” Ведущая компания Республики
               Казахстан по стандартизации и нормированию в нефтегазовой отрасли
            </h1>
         </div>
         <div className="filter"></div>
      </div>
   );
};

export default Video;
