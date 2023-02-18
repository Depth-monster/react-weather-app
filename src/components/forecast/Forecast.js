import React from "react";
import "./Forecast.css";

const Forecast = ({ forecast }) => {
  console.log(forecast);
  //console.log((forecast.list[0].dt_txt).split(' '))
  const helper = forecast.list[0].dt_txt.split(" ");
  const hours = helper[1]
  console.log(hours);
  const a = parseFloat(hours);
  console.log(a);
  console.log(typeof a);

  return (
    // <div className="forecast-main">
    //   <div className="forecast-list">
    //     {forecast.list.map((id, index) => (
    //       <div key={index} className="forecast-item">
    //         <p>{`${id.dt_txt}`}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>


    <div className="forecast-main">
  <div className="forecast-list">
    {forecast.list.slice(0, 7).map((id, index) => (
      <div key={index} className="forecast-item">
        <p>{`${id.dt_txt}`}</p>
      </div>
    ))}
  </div>
</div>
  );
};

export default Forecast;