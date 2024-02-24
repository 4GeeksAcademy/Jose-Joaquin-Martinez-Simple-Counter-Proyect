import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import clock from "../img/clock.png";

let counter = 0;
let countingInterval;

const stopCount = () => {
  clearInterval(countingInterval);
};

const restartCount = () => {
  counter = 0;
  renderCounter();
};

const resumeCount = () => {
  countingInterval = setInterval(() => {
    counter++;
    renderCounter();
  }, 1000);
};

const keyDownEvent = (e) => {
  if (e.key === "Enter") {
    let input = parseInt(e.target.value);
    counter = input;
    renderCounter();
  }
};

const renderCounter = () => {
  ReactDOM.render(
    <div>
      <div className="counter-container">
        <div>
          <img src={clock} alt="clock imagen" />
        </div>
        <div className="number sixth">{Math.floor(counter / 100000) % 10}</div>
        <div className="number fifth">{Math.floor(counter / 10000) % 10}</div>
        <div className="number fourth">{Math.floor(counter / 1000) % 10}</div>
        <div className="number third">{Math.floor(counter / 100) % 10}</div>
        <div className="number second">{Math.floor(counter / 10) % 10}</div>
        <div className="number first">{Math.floor(counter / 1) % 10}</div>
      </div>
      <div>
        <input type="number" onKeyDown={keyDownEvent}></input>
        <button onClick={resumeCount}>Resume</button>
        <button onClick={restartCount}>Restart</button>
        <button onClick={stopCount}>Stop</button>
      </div>
    </div>,
    document.querySelector("#app")
  );
};

resumeCount();
