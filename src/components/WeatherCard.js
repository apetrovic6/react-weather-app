import React from "react";
import { weekday, month } from "./DayMonthSetup";

const WeatherCard = (props) => {
  const weather = props.data.map((e) => {
    let day = new Date(e.valid_date);

    return (
      <div key={e.valid_date}>
        <div className="mx-1 my-2 border  rounded-lg">
          <div className="mx-2 my-2">
            <div className="text-xl flex justify-center">
              {weekday[day.getDay()]}
            </div>
            <div className="text-sm flex justify-center">
              {day.getDate()}. {month[day.getMonth()]}
            </div>
            <div className="flex justify-center mt-2">
              <img
                src={`https://www.weatherbit.io/static/img/icons/${e.weather.icon}.png`}
                alt={e.weather.description}
              />
            </div>
            <div className="text-sm flex justify-center">
              Low temp: {Math.round(e.min_temp)}°c
              <br />
              High temp: {Math.round(e.max_temp)}°c
            </div>
            <div className="text-l flex justify-center mt-1 font-medium">
              {e.weather.description}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return [weather];
};

export default WeatherCard;
