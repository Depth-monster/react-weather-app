import React from "react";
import "./Forecast.css";

const Forecast = ({ forecast }) => {
  console.log(forecast);
  

  return (
    <div className="forecast-main">
      <div className="forecast-list">
        {forecast.list.map((id) => (
          <div className="forecast-item">

            <p>{`${id.dt_txt}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
