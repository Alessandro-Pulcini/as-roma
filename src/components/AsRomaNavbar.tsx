import React from "react";
import { asRomaNavbarList } from "../utils/data";
import AsRomaNavbarUp from "../components/AsRomaNavbarUp";
import AsRomaNavbarDown from "../components/AsRomaNavbarDown";
import "./roma.css";

const AsRomaNavbar = () => {
  return (
    <div>
      <AsRomaNavbarUp />
      <AsRomaNavbarDown />
    </div>
  );
};

export default AsRomaNavbar;
