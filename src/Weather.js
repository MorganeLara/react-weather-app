import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Header">
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
              <input type="submit" value="🔎" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
      <div className="Body">
        <div className="Main-info">
          <h2 className="City">Brussels</h2>
          <ul>
            <li className="Date">Friday 09:30</li>
            <li className="Weather-description">Few Clouds</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Few Clouds"
            />
            17°C
          </div>
          <div className="col-6">
            <ul>
              <li>Min/Max: 15°/19°</li>
              <li>Humidity: 69%</li>
              <li>Wind: 2 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
