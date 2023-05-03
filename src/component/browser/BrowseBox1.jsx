import React from "react";
import MusicMan from "../../img/musicman.png";
import "./browseBox1.css";

const BrowseBox1 = () => {
  const data = window.localStorage.getItem("userData");
  const userData = JSON.parse(data);
  const genre = JSON.parse(window.localStorage.getItem("boxes"));

  return (
    <div className="browseBox1">
      <div className="row">
        <div className="col-4">
          <img src={MusicMan} alt="musicman" width={235} height={487} />
        </div>
        <div className="col-8">
          <div className="profileInfo">
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <h3>{userData.uname}</h3>
            <Chips categories={genre} color={"#9F94FF"} />
          </div>
        </div>
      </div>
    </div>
  );
};
const Chips = ({ color, categories }) => {
  return (
    <div>
      {categories.map((category, idx) => (
        <button className="CategoryBtn" key={idx}>
          <span>{category}</span> <span className="crossIcon">X</span>
        </button>
      ))}
    </div>
  );
};

export default BrowseBox1;
