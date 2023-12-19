import React, { useState } from "react";
import "./WeatherApp.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),

      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "7059cb165caa3316bff682d263a01b1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="search-form" id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <input
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                id="city-input"
                className="form-control shadow-sm city"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm button-color"
              />
            </div>
          </div>
        </form>

        <div className="col-3">
          <button
            className="btn btn-success w-100 proder"
            id="current-location-button"
          >
            Current
          </button>
        </div>
        <WeatherInfo data={weatherData} />
        <br />

        <div className="weather-forecast" id="weather-forecast"></div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
