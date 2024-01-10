import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemprature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row column-gap">
        <div className="col-8">
          <h1 id="city">{props.data.city}</h1>
          <ul className="date-and-description-section">
            <li id="date">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <ul className="humidity-and-wind-section">
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>
              <span className="other-weather-info">%</span>
            </li>
            <li>
              Wind: <span id="wind"> {props.data.wind}</span>
              <span className="other-weather-info">km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="clearfix weather-temperature">
            <WeatherIcon code={props.data.icon} size={52} />
            <WeatherTemprature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
