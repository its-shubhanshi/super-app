import React from "react";
import "./browser.css";
import BrowseBox1 from "./BrowseBox1";
import WeatherBox from "./WeatherBox";
import News from "./News";

const Browser = () => {
  return (
    <div className="browserSection">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <BrowseBox1 />
            <WeatherBox />
          </div>
          <div className="col-4">
            <News />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
