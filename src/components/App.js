import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import HourlyWeather from "./HourlyWeather";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const App = (props) => {
  const [term, setTerm] = useState("");
  const [forecast, setForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [currentForecast, setCurrentForecast] = useState([]);

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    const resultDay = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${term}&days=${6}&key=${API_KEY}`
    );
    const resultHour = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/hourly?city=${term}&key=${API_KEY}&hours=${14}`
    );
    const resultCurrent = await axios.get(
      `https://api.weatherbit.io/v2.0/current?&city=${term}&key=${API_KEY}`
    );
    setForecast(resultDay.data.data);
    setHourlyForecast(resultHour.data.data);
    setCurrentForecast(resultCurrent.data.data);
  };

  return (
    <div className="mx-10 my-5 ">
      <div>
        <div className="flex w-auto justify-center ">
          <h1 className="text-4xl  mx-2 my-2 pb-3">Weather</h1>
        </div>
      </div>
      <div className="flex w-auto justify-center">
        <h1>
          <div className="pb-3">
            <form onSubmit={onSearchSubmit}>
              <input
                className="text-center border-2 rounded-lg "
                type="text"
                name="city"
                placeholder="City"
                onChange={(e) => setTerm(e.target.value)}
              />
            </form>
          </div>
        </h1>
      </div>
      <div className="grid-rows-3 ">
        <div className="flex justify-center mb-3">
          <CurrentWeather dataCurrent={currentForecast} />
        </div>

        <div className="flex justify-center ">
          <HourlyWeather dataHour={hourlyForecast} />
        </div>
        <div className="flex justify-center ">
          <div className=" sm:grid sm:grid-cols-auto sm:grid-cols-3 lg:grid lg:grid-cols-6 my-2  rounded-lg">
            <WeatherCard data={forecast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
