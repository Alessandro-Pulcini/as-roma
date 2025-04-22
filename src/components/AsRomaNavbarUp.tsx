import React from "react";
import riyadh from "../assets/riyadh-season.png";
import adidas from "../assets/adidas-performance-logo.png";
import roma from "../assets/as-roma.svg";

const RomaNavbarUp = () => {
  const RomaLogo = () => {
    return (
      <div>
        <img className="logo-roma" src={roma} alt="roma logo" />
        <RomaLogo />
      </div>
    );
  };

  return (
    <div className="navbar-up">
      <img className="logo-left" src={riyadh} alt="riyadh logo" />
      <img className="logo-right" src={adidas} alt="adidas logo" />
    </div>
  );
};

export default RomaNavbarUp;
