import React from "react";
import BrowseBox1 from "../browser/BrowseBox1";
import WeatherBox from "../browser/WeatherBox";
import News from "../browser/News";
import "./notebrowse.css";
import Note from "../browser/Note";
import Timer from "../browser/Timer";
import { useNavigate } from "react-router-dom";

const NoteBrowse = () => {
  const navigate = useNavigate();
  const handleMoviePage = () => {
    navigate("/movie");
  };

  return (
    <div className="noteBrowse">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-8">
                <BrowseBox1 />
                <WeatherBox />
              </div>
              <div className="col-4">
                <Note />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Timer />
              </div>
            </div>
          </div>
          <div className="col-3">
            <News />
          </div>
        </div>
        <button className="browseBtn" onClick={handleMoviePage}>
          Browse
        </button>
      </div>
    </div>
  );
};

export default NoteBrowse;
