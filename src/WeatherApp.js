import React, { useState } from "react";
import "./WeatherApp.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
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
            <div className="col-sm-9">
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
        <br></br>
        <br></br>
        <WeatherInfo data={weatherData} />
        <br></br>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
