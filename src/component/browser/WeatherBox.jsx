import React, { useEffect } from "react";
import "./weatherbox.css";
import Vector from "../../img/Vector.png";
import HumidityImg from "../../img/humidiy.png";
import WindImg from "../../img/wind.png";
import { useState } from "react";

const WeatherBox = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(false);
  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        "http://api.weatherapi.com/v1/current.json?key=8e42a5abcf7148c184c151333233004&q=London&aqi=no"
      )
        .then((data) => data.json())
        .then((res) => {
          setWeather(res);
          console.log(res);
        });
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minute = minute < 10 ? "0" + minute : minute;
    const formetTime = hours + ":" + minute + " " + ampm;
    setTime(formetTime);
  });
  useEffect(() => {
    const today = new Date();
    var yyyy = today.getFullYear();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    const formetDate = mm + "-" + dd + "-" + yyyy;
    setDate(formetDate);
  });
  return (
    <div className="weather">
      <div className="dateBox">
        <h2>
          <span>{date}</span>
          <span>{time}</span>
        </h2>
      </div>
      {weather ? (
        <div className="weatherInfo flex">
          <div>
            <img
              src={weather.current.condition.icon}
              alt="weather_icon"
              width={100}
            />
            <h4>{weather.current.condition.text} </h4>
          </div>
          <div>
            <h3>{weather.current.temp_c}°C</h3>
            <p className="flex">
              {" "}
              <img src={Vector} alt="vector" />
              <span>
                {weather.current.pressure_mb} mbar <br /> Pressure
              </span>
            </p>
          </div>
          <div>
            <p className="flex">
              <img src={WindImg} alt="wind" />
              <span>
                {weather.current.wind_kph} km/h <br /> Wind
              </span>
            </p>
            <br />
            <p className="flex">
              <img src={HumidityImg} alt="humidity" />
              <span>
                {weather.current.humidity} % <br /> Humidity
              </span>
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WeatherBox;
