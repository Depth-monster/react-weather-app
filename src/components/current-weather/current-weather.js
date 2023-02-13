import React from "react";
import "./current-weather.css";

const CurrentWeather = ({current, forecast}) => {
console.log(current,forecast);
//console.log(forecast)
console.log('daily city name :',current.name)
console.log('forecast city name :',forecast.city.name)


  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{current.name}</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="./logo192.png" />
      </div>
      <div className="bottom">
        <p className="temperature">{}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label underline">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">22%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
