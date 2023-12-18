import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-sm-6">
              <input
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                id="city-input"
                className="form-control shadow-sm city"
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

        <h1 id="city">{weatherData.city}</h1>
        <ul>
          <li id="date">Wednesday. December 11</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src=""
                alt={weatherData.description}
                id="icon"
                className="float-left"
              />
              <span className="temperature">
                <strong id="temperature">
                  {Math.round(weatherData.temperature)}
                </strong>
              </span>
              <span className="units">°C/°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>
                <span className="writeup-color">%</span>
              </li>
              <li>
                Wind: <span id="wind"> {weatherData.wind}</span>
                <span className="writeup-color">km/h</span>
              </li>
            </ul>
          </div>
        </div>
        <br />

        <div className="weather-forecast" id="weather-forecast"></div>
      </div>
    );
  } else {
    let apiKey = "7059cb165caa3316bff682d263a01b1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
