import React from "react";

export default function WeatherApp() {
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

      <h1 id="city">Paris</h1>
      <ul>
        <li id="date">Wednesday. December 11</li>
        <li id="description">Cloud</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src="" alt="Clear" id="icon" className="float-left" />
            <span className="temperature">
              <strong id="temperature">19</strong>
            </span>
            <span className="units">
              <a href="" id="celcius-link" className="active">
                {" "}
                °C{" "}
              </a>
              /
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>
              <span className="writeup-color">%</span>
            </li>
            <li>
              Wind: <span id="wind"></span>
              <span className="writeup-color"> km/h</span>
            </li>
          </ul>
        </div>
      </div>
      <br />

      <div className="weather-forecast" id="weather-forecast"></div>
    </div>
  );
}
