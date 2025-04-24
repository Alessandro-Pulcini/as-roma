import React from "react";
import { asRomaNavbarList } from "../utils/data";
import NavbarUp from "./NavbarUp";
import NavbarDown from "./NavbarDown";
import roma from "../assets/as-roma.svg";
import "./asroma.css";

const AsRomaNavbar = () => {
  return (
    <div className="navbar">
      <img className="logo-roma" src={roma} alt="roma logo" />
      <NavbarUp />
      <NavbarDown />
    </div>
  );
};

export default AsRomaNavbar;
