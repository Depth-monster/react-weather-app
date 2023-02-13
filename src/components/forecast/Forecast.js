import React from "react";
import "./Forecast.css";

const Forecast = ({ forecast }) => {
  console.log(forecast);
  const screenWidth = window.innerWidth;
  let itemWidth = 300;
  
  if (screenWidth < 768) {
    itemWidth = screenWidth - 40;
  }
  return (
    <div className="forecast-main">
      <div className="forecast-list">
        {forecast.list.map((id) => (
          <div className="forecast-item" style={{ width: itemWidth }}>

            <p>{`${id.dt_txt}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
