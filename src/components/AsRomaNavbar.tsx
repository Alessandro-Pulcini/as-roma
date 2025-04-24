import React from "react";
import { asRomaNavbarList } from "../utils/data";
import NavbarUp from "./NavbarUp";
import NavbarDownLeft from "./NavbarDownLeft";
import NavbarDownRight from "./NavbarDownRight";
import roma from "../assets/as-roma.svg";
import "./roma.css";

const AsRomaNavbar = () => {
  return (
    <div className="navbar">
      <img className="logo-roma" src={roma} alt="roma logo" />
      <NavbarUp />
      <NavbarDownLeft />
      <NavbarDownRight />
    </div>
  );
};

export default AsRomaNavbar;
