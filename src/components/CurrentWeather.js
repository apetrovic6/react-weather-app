import React from "react";

const CurrentWeather = (props) => {
  const currentWeather = props.dataCurrent.map((e) => {
    return (
      <div key={e.datetime} className="">
        <div className="flex justify-center">
          <h1 className="text-2xl mx-2 my-2">Current weather for</h1>
        </div>
        <div className="border rounded-lg ">
          <div className="flex justify-center">
            <h1 className="text-lg font-medium mb-2">
              {props.dataCurrent[0].city_name}
            </h1>
          </div>

          <div className="flex justify-center">{Math.round(e.app_temp)}°c</div>
          <div className="flex justify-center mt-2">
            <img
              src={`https://www.weatherbit.io/static/img/icons/${e.weather.icon}.png`}
              alt={e.weather.description}
            />
          </div>
          <div className="text-l flex justify-center mt-1 font-medium">
            {e.weather.description}
          </div>
        </div>
      </div>
    );
  });
  return <div>{currentWeather}</div>;
};

export default CurrentWeather;
