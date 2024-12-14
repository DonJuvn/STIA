import React from "react";

const resultsData = [
   { id: 1, value: 356, description: "Стандартов организации" },
   { id: 2, value: 139, description: "Национальных стандартов" },
   { id: 3, value: 10, description: "Международных стандартов" },
   { id: 4, value: 13, description: "НИОКР" },
   {
      id: 5,
      value: 2200,
      description:
         "Обучено более 2200 сотрудников нефтегазовой отрасли по промышленной безопасности",
   },
];

const Results = () => {
   return (
      <div id="results">
         <div className="container">
            <h1 id="title">Результаты</h1>
            <div className="results">
               <div className="left">
                  <p id="initial">
                     Наши переводы помогают компаниям эффективно общаться с
                     международными партнёрами, упрощают внедрение сложных
                     технологий и обеспечивают ясность документации.
                  </p>

                  {resultsData.map((item) => {
                     if (item.description === "Национальных стандартов") {
                        return (
                           <div key={item.id} id="left" className="item">
                              <h2 className="result-value">{item.value}</h2>
                              <p className="result-description">{item.description}</p>
                           </div>
                        );
                     }
                     return null; // Return nothing if no match
                  })}
                  {resultsData.map((item) => {
                     if (item.description === "НИОКР") {
                        return (
                           <div key={item.id} id="left" className="item">
                              <h2 className="result-value">{item.value}</h2>
                              <p className="result-description">{item.description}</p>
                           </div>
                        );
                     }
                     return null;
                  })}
               </div>
               <div className="right">
                  {resultsData.map((item) => {
                     if (item.description === "Стандартов организации") {
                        return (
                           <div key={item.id} id="right" className="item">
                              <h2 className="result-value">{item.value}</h2>
                              <p className="result-description">{item.description}</p>
                           </div>
                        );
                     }
                     return null;
                  })}
                  {resultsData.map((item) => {
                     if (item.description === "Международных стандартов") {
                        return (
                           <div key={item.id} id="right" className="item">
                              <h2 className="result-value">{item.value}</h2>
                              <p className="result-description">{item.description}</p>
                           </div>
                        );
                     }
                     return null;
                  })}
                  {resultsData.map((item) => {
                     if (
                        item.description ===
                        "Обучено более 2200 сотрудников нефтегазовой отрасли по промышленной безопасности"
                     ) {
                        return (
                           <div key={item.id} id="right" className="item">
                              <h2 className="result-value">{item.value}</h2>
                              <p className="result-description">{item.description}</p>
                           </div>
                        );
                     }
                     return null;
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Results;
