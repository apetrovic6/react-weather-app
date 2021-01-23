import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const App = (props) => {
  const [term, setTerm] = useState("");
  const [forecast, setForecast] = useState([]);

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${term}&days=${5}&key=${API_KEY}`
    );
    setForecast(result.data.data);
  };

  return (
    <div className="mx-10 my-5">
      <div>
        <div className="flex w-auto justify-center ">
          <h1 className="text-4xl  mx-2 my-2">5 Day forecast</h1>
        </div>
      </div>
      <div className="flex w-auto justify-center">
        <h1>
          <div>
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
      <div className="flex justify-center ">
        <div className="grid grid-cols-5 my-2 border-2 rounded-lg ">
          <WeatherCard data={forecast} />
        </div>
      </div>
    </div>
  );
};

export default App;
