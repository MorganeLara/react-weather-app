import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h2 className="City">Brussels</h2>
          <ul>
            <li className="Date">Friday 09:30</li>
            <li className="Weather-description">Few Clouds</li>
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
                <span className="temp-value">17</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Min/Max: 15°/19°</li>
              <li>Humidity: 69%</li>
              <li>Wind: 2km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
