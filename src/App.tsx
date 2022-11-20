import React from "react";

import "./App.scss";

import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className="taskbar">
        <div className="taskbarLeft">
          <button className="startButton">
            <img src={logo} alt="" className="smallIcon" />
            <p>Iniciar</p>
          </button>
          <div className="windowSwitcher">
            <button className="windowButton">
              <img src={logo} alt="" className="smallIcon" />
              <p>Some Window</p>
            </button>
          </div>
        </div>

        <div className="clock">
          <p>18:54</p>
        </div>
      </div>
    </div>
  );
}

export default App;
