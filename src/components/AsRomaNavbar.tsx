import React from "react";
import romaLogo from "../assets/as-roma.svg";
import { asRomaNavbarList } from "../utils/data";   

const AsRomaNavbar = () => {
  return (
    <div className="navbar-left">
      <img className="logo-roma" src={romaLogo} alt={"Roma Logo"} />
    </div>
  );
};

export default AsRomaNavbar;
