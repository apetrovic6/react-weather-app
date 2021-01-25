import React from "react";

const HourlyWeather = (props) => {
  const weatherHour = props.dataHour.map((e) => {
    const time = new Date(e.timestamp_local);
    return (
      <span className="flex justify-center  " key={e.timestamp_local}>
        <div className=" ">
          <div className="sm:flex-auto lg:flex-none ">
            <div className="flex justify-center mt-1 ">
              {time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`}
            </div>
            <div className=" w-7 h-7  mx-4 ">
              <img
                src={`https://www.weatherbit.io/static/img/icons/${e.weather.icon}.png`}
                alt={e.weather.description}
              />
            </div>

            <div className="flex justify-center">
              {Math.round(e.app_temp) > 0
                ? ` ${Math.round(e.app_temp)}`
                : Math.round(e.app_temp)}
              °c
            </div>
          </div>
        </div>
      </span>
    );
  });

  return (
    <div>
      <div className="border rounded-lg lg:flex lg:grid-cols-auto ">
        {weatherHour}
      </div>
    </div>
  );
};

export default HourlyWeather;
