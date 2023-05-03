import React from "react";
import "./registration.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Registration = () => {
  return (
    <div className="registration">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <LeftSide />
          </div>
          <div className="col-6">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
