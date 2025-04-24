import React from "react";
import riyadh from "../assets/riyadh-season.png";
import adidas from "../assets/adidas-performance-logo.png";

const RomaNavbarUp = () => {
  return (
    <div className="navbar-up">
      <img className="logo-left" src={riyadh} alt="riyadh logo" />
      <img className="logo-right" src={adidas} alt="adidas logo" />
    </div>
  );
};

export default RomaNavbarUp;
