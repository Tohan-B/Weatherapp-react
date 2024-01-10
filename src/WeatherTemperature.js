import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">
          <strong id="temperature">{Math.round(props.celsius)}</strong>
        </span>
        <span className="units">
          °C |{" "}
          <a
            href="/"
            onClick={showFahrenheit}
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5;
    return (
      <span>
        <span className="temperature">
          <strong id="temperature">{Math.round(fahrenheit)}</strong>
        </span>
        <span className="units">
          <a
            href="/"
            onClick={showCelsius}
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
