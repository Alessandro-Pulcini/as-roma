import React from "react";
import { asRomaNavbarList } from "../utils/data";
import hamburgerLogo from "../assets/hamburger.png";
import sortDown from "../assets/down.png";
import search from "../assets/searchh.png";

const NavbarDownLeft = () => {
  return (
    <div className="navbar-down">
      <div className="navbar-down-left">
        <img className="hamburger" src={hamburgerLogo} alt="hamburger" />
        {asRomaNavbarList.map((element) => {
          return (
            <div
              className="navbar-down-elements"
              key={element.id}
              onClick={() => alert(element.text)}
            >
              {element.text}
            </div>
          );
        })}
      </div>
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

export default NavbarDownLeft;
