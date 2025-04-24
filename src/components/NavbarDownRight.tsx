import React from "react";
import sortDown from "../assets/down.png";
import search from "../assets/searchh.png";

const NavbarDownRight = () => {
  return (
    <div className="navbar-down">
      <div className="navbar-down-right">
        <div className="text">
          IT
          <img className="sort-down" src={sortDown} alt="sort down" />
          <img className="search" src={search} alt="search" />
        </div>
      </div>
    </div>
  );
};
export default NavbarDownRight;
