import React from "react";
import icons from "./icons";

const App = () => {
  return (
    <div className="h-screen mx-10 my-5 ">
      <div>
        <div className="flex w-auto justify-center ">
          <h1 className="text-4xl  mx-2 my-2">5 Day forecast</h1>
        </div>
      </div>
      <div className="flex w-auto justify-center">
        <h1>New York</h1>
      </div>
      <div className="flex  justify-center ">
        <div className="grid gap-0 grid-cols-5 bg-green-500 my-2">
          <span className="mx-2 my-2 border rounded-lg">
            <div className="mx-2 my-2">
              <div className="text-xl flex justify-center ">Monday</div>
              <div className="text-sm flex justify-center">March 1st</div>
              <div className="">{icons.sun}</div>
              <div className="text-xl flex justify-center">10c </div>
              <div className="text-m flex justify-center">Clear sky</div>
            </div>
          </span>
          <span className="mx-5 my-2 border rounded-lg">
            <div className="mx-2 my-2">
              <div className="text-xl flex justify-center">Tuesday</div>
              <div className="text-sm flex justify-center">March 2nd</div>
              <div className="">{icons.sun}</div>
              <div className="text-xl flex justify-center">11c</div>
              <div className="text-m flex justify-center">Rain</div>
            </div>
          </span>
          <span className="mx-5 my-2 border rounded-lg">
            <div className="mx-2 my-2">
              <div className="text-xl flex justify-center">Wednesday</div>
              <div className="text-sm flex justify-center">March 3rd</div>
              <div className="">{icons.sun}</div>
              <div className="text-xl flex justify-center">13c</div>
              <div className="text-m flex justify-center">Rain and thunder</div>
            </div>
          </span>
          <span className="mx-5 my-2 border rounded-lg">
            <div className="mx-2 my-2">
              <div className="text-xl flex justify-center">Thursday</div>
              <div className="text-sm flex justify-center">March 4th</div>
              <div className="">{icons.sun}</div>
              <div className="text-xl flex justify-center">9c</div>
              <div className="text-m flex justify-center">Cloudy</div>
            </div>
          </span>
          <span className="mx-5 my-2 border rounded-lg">
            <div className="mx-2 my-2">
              <div className="text-xl flex justify-center">Friday</div>
              <div className="text-sm flex justify-center">March 5th</div>
              <div className="">{icons.sun}</div>
              <div className="text-xl flex justify-center">12c</div>
              <div className="text-m flex justify-center">Clear sky</div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
