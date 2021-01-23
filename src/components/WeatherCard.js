import React from "react";
import { weekday, month } from "./DayMonthSetup";

const WeatherCard = (props) => {
  const weather = props.data.map((e) => {
    let day = new Date(e.datetime);
    return (
      <span key={e.datetime} className="mx-5 my-2 border rounded-lg">
        <div className="mx-2 my-2">
          <div className="text-xl flex justify-center">
            {weekday[day.getDay()]}
          </div>
          <div className="text-sm flex justify-center">
            {month[day.getMonth()]} {day.getDate()}.
          </div>
          <div className="flex justify-center mt-2">
            <img
              src={`https://www.weatherbit.io/static/img/icons/${e.weather.icon}.png`}
              alt={e.weather.description}
            />
          </div>
          <div className="text-sm flex justify-center mt-2 ">
            Low temp: {e.min_temp}°c
            <br />
            High temp: {e.max_temp}°c
          </div>
          <div className="text-l flex justify-center">
            {e.weather.description}
          </div>
        </div>
      </span>
    );
  });

  return [weather];
};

export default WeatherCard;
