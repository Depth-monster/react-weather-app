import React from "react";
import "./Forecast.css";

const Forecast = ({ forecast }) => {
  console.log(forecast);

  const randomIndexes = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 40)
  );
  const selectedItems = randomIndexes.map((index) => forecast.list[index]);
  console.log("randomIndexes : ", randomIndexes);

  console.log("selectedItems : ", selectedItems);

  return (
    <div className="forecast-main">
      <div className="forecast-list">
        {selectedItems.map((item, index) => (
          <div key={index} className="forecast-item">
            <div>
              <ul>
                <li>{`${item.dt_txt}`}</li>
                <p>{`${item.main.feels_like}`}</p>
                <li>{`${item.weather[0].description}`}</li>
              
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forecast;

// <div className="forecast-main">
// <div className="forecast-list">
//   {selectedItems.map((item, index) => (
//     <div key={index} className="forecast-item">
//       <p>{`${item.dt_txt}`}</p>
//     </div>
//   ))}
// </div>
// </div>
