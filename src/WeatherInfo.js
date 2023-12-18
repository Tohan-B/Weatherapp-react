import React from "react";
import FormattedDate from "./FormattedDate";

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
            <img
              src=""
              alt={props.data.description}
              id="icon"
              className="float-left"
            />
            <span className="temperature">
              <strong id="temperature">
                {Math.round(props.data.temperature)}
              </strong>
            </span>
            <span className="units">°C/°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>
              <span className="writeup-color">%</span>
            </li>
            <li>
              Wind: <span id="wind"> {props.data.wind}</span>
              <span className="writeup-color">km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
