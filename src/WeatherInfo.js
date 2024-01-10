import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemprature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 id="city">{props.data.city}</h1>
      <ul>
        <li id="date">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <WeatherIcon code={props.data.icon} size={52} />
            <WeatherTemprature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
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
      </div>
    </div>
  );
}
