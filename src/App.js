import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/Search";

function App() {
  // const a = -990011;
  // const b = (a) => parseFloat(a.toString().split("").reverse().join(""))*Math.sign(a);

  const [data,setData]=useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    setData(searchData.value.split(' '));
    const [lat, long] = searchData.value;
    console.log(data)
  };


  
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}
//dddd
export default App;
