import React, { useState } from "react";
import Display from "./Display";
let API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function Form() {
  const [zip, setZip] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await fetch(url);
    res = await res.json();
    if (res.cod !== 200) {
      setError(res.message);
      setData(null);
    } else {
      setData(res);
      setError(null);
    }
    console.log(data);
  }

  const handleChange = (e) => {
    setZip(e.target.value);
    // console.log(zip);
  };

  return (
    <div className="form-contents">
      <h2>Weather Today</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter zip code"
          value={zip}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
        <div className="container">
          <div className="display-wrapper">
            {error && <p className="error">{error}</p>}
            {data && <Display data={data} />}
          </div>
        </div>
      </form>
    </div>
  );
}
