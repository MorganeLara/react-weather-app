import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temp-value">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
