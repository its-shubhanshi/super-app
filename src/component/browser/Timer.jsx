import React, { useState } from "react";
import Up from "../../img/up.png";
import Down from "../../img/down.png";
import "./timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const increaseSeccond = () => {
    if (second == 59) {
      return;
    }
    setSecond((sec) => sec + 1);
  };
  const decreaseSecond = () => {
    if (second == 0) {
      return;
    }
    setSecond((sec) => sec - 1);
  };
  const increaseMinute = () => {
    if (minutes == 59) {
      return;
    }
    setMinute((min) => min + 1);
  };
  const decreaseMinute = () => {
    if (minutes == 0) {
      return;
    }
    setMinute((min) => min - 1);
  };
  const increaseHours = () => {
    setHours((hour) => hour + 1);
  };
  const decreaseHours = () => {
    if (hours == 0) {
      return;
    }
    setHours((hour) => hour - 1);
  };

  const hoursToMinutes = (totalSeconds) => {
    const totalMinute = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinute / 60);
    const minute = totalMinute % 60;
    const remainingTime = `${hours} : ${minute} : ${seconds}`;
    return remainingTime;
  };

  return (
    <div className="timerBox flex">
      <div className="progressBar">
        {/*{({remainingTime})=><p>05:08:56 {hoursToMinutes(remainingTime)}</p>}*/}
        <CountdownCircleTimer
          className="countDownBar"
          strokeWidth={9}
          isPlaying={playing}
          duration={second + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
        >
          {({ remainingTime }) => (
            <span
              style={{
                color: "white",
                fontSize: "1.5rem",
                position: "absolute",
                top: "-30px",
                fontWeight: "600",
              }}
            >
              {hoursToMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className="timer">
        <div className="flex">
          <div className="hours">
            <h3>Hours</h3>
            <img src={Up} alt="up" onClick={increaseHours} />
            <p>{hours}</p>
            <img src={Down} alt="down" onClick={decreaseHours} />
          </div>
          <div className="minutes">
            <h3>Minute</h3>
            <img src={Up} alt="up" onClick={increaseMinute} />
            <p>{minutes}</p>
            <img src={Down} alt="down" onClick={decreaseMinute} />
          </div>
          <div className="second">
            <h3>Second</h3>
            <img src={Up} alt="up" onClick={increaseSeccond} />
            <p>{second}</p>
            <img src={Down} alt="down" onClick={decreaseSecond} />
          </div>
        </div>
        <button
          className="startBtn"
          onClick={() => setPlaying((prev) => !prev)}
        >
          {playing ? <span>Pause</span> : <span>Start</span>}
        </button>
      </div>
    </div>
  );
};

export default Timer;
