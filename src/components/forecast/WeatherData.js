import React from 'react';
const WeatherData = ({ forecast }) => {
    // debugger
    // // Group the weather data by date
    // const groupedData = forecast.list.reduce((acc, curr) => {
    //   const date = curr.list[0].dt_txt.split(' ')[0];
    //   if (!acc[date]) {
    //     acc[date] = [];
    //   }
    //   acc[date].push(curr);
    //   return acc;
    // }, {});
  
    // // Map over each group of data for a single date
    // const forecastData = Object.values(groupedData).map((dayData, index) => (
    //   <div key={index}>
    //     <h3>{dayData[0].list[0].dt_txt.split(' ')[0]}</h3>
    //     <ul>
    //       {dayData.map((hourData, i) => (
    //         <li key={i}>
    //           {hourData.list[0].dt_txt.split(' ')[1]}: {hourData.list[0].main.temp}°C, {hourData.list[0].weather[0].description}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // ));
  
    return <div>Heloo</div>;
  };
  
  export default WeatherData;
