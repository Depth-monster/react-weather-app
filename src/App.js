import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/Search";

function App() {
  // const a = -990011;
  // const b = (a) => parseFloat(a.toString().split("").reverse().join(""))*Math.sign(a);
  const handleOnSearchChange = ( searchData ) => {
    console.log(searchData);
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
