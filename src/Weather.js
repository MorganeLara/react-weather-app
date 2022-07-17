import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <hr />
        <div className="Body">
          <div className="Main-info">
            <h3 className="City">{weatherData.city}</h3>
            <ul>
              <li className="Date">
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left">
                  <img
                    src="http://openweathermap.org/img/wn/02d@2x.png"
                    alt="Few Clouds"
                  />
                  <span className="temp-value">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Min/Max: {Math.round(weatherData.tempMin)}°/
                  {Math.round(weatherData.tempMax)}°
                </li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4ae86e02efa11f6104c128d0198748d6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
