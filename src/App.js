import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/Search";
import {
  OPEN_WEATHER_KEY,
  GET_OPENWEATHER_DAILY,
  GET_OPENWEATHER_FORECAST,
} from "./components/api";
import Forecast from "./components/forecast/Forecast";
import WeatherData from "./components/forecast/WeatherData";

function App() {
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" "); //split lat='yyy' long='xxxx' from data[1].data[2]

    const fetchedDailyData = fetch(
      `${GET_OPENWEATHER_DAILY}lat=${lat}&lon=${long}&units=metric&appid=${OPEN_WEATHER_KEY}`
    );
    const fetchedForecastData = fetch(
      `${GET_OPENWEATHER_FORECAST}lat=${lat}&lon=${long}&units=metric&appid=${OPEN_WEATHER_KEY}`
    );

    Promise.all([fetchedDailyData, fetchedForecastData]).then(
      async (response) => {
        const weatherDaily = await response[0].json();
        const weatherForecast = await response[1].json();
        setCurrentData(weatherDaily); //setting API daily
        setForecastData(weatherForecast); //setting API forecast
      }
    );
    // console.log('long :',long)// here i've checked lat and long and fixed a problem
    // console.log('lat :',lat)
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentData && <CurrentWeather current={currentData} />}
      {forecastData && <Forecast forecast={forecastData} />}
      {/* {forecastData && <WeatherData forecast={forecastData} />} this component will be defined later */} 
    </div>
  );
}

export default App;
