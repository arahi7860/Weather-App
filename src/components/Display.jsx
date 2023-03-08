import React from "react";

export default function Display({ data }) {
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <div className="answers">
      <div>
        <h2>{data.name}</h2>
      </div>
      <p className="degrees">
        {celsiusToFahrenheit(kelvinToCelsius(data.main.temp)).toFixed(2)} °F
      </p>
      <p>
        Feels Like:{" "}
        {celsiusToFahrenheit(kelvinToCelsius(data.main.feels_like)).toFixed(2)}
        °F
      </p>
      <p>Weather: {data.weather[0].main}</p>
      <p>Description: {data.weather[0].description}</p>
      <p className="min">
        Min:{" "}
        {celsiusToFahrenheit(kelvinToCelsius(data.main.temp_min)).toFixed(2)} °F
      </p>
      <p className="max">
        Max:{" "}
        {celsiusToFahrenheit(kelvinToCelsius(data.main.temp_max)).toFixed(2)} °F
      </p>
    </div>
  );
}
