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
//   switch (a) {
//     case (0<=a<3):
//     console.log('case 1')
//       const b = 2;
//       break;
//     case (3<=a<6):
//       const b = 2;
//       break;
//     case (6<=a<9):
//       const b = 6;
//       break;
//     case (9<=a<12):
//       const b = 12;
//       break;
//     case (12<=a<15):
//       const b = 2;
//       break;
//     case (15<=a<18):
//       const b = 2;
//       break;
//     case (18<=a<21):
//       const b = 2;
//       break;
//      case (21<=a<23):
//       const b = 2;
//       break;
//      case (a==23)
//      const d;
//      break
//
//   }

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
