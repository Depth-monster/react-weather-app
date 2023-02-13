import React from "react";
import "./current-weather.css";

const CurrentWeather = ({current}) => {
//console.log(current,forecast);
//console.log(forecast)
// console.log('daily city name :',current.name)
// console.log('forecast city name :',forecast.city.name)
// console.log('forecast city name :',current.weather[0].icon)


  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{current.name }, <br />{current.sys.country}</p>
          <p className="weather-description">{current.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${current.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(current.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label underline">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">{Math.round(current.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">{current.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">{current.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">{current.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
