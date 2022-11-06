import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brussels" />
        <div className="credits">
          <small>
            This project was coded by Morgane Lara and is{" "}
            <a
              href="https://github.com/MorganeLara/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and
            <a
              href="https://app.netlify.com/sites/resplendent-crepe-28e0d1/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
            <br />
            Check out my other{" "}
            <a
              href="https://main--legendary-cascaron-cb1365.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              project
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
