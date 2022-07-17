import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brussels" />
        <div className="credits">
          <a
            href="https://github.com/MorganeLara/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Morgane Lara 🇫🇷
        </div>
      </div>
    </div>
  );
}

export default App;
