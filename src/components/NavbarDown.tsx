import React from "react";
import { asRomaNavbarList } from "../utils/data";
import hamburgerLogo from "../assets/hamburger.png";
import sortDown from "../assets/down.png";
import search from "../assets/searchh.png";
import ticket from "../assets/ticket.png";
import shop from "../assets/shopping-cart.png";
import rightArrow from "../assets/right-arrow.png";

const NavbarDown = () => {
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
        <div className="text-language">
          IT
          <img className="sort-down" src={sortDown} alt="sort down" />
        </div>
        <img className="search" src={search} alt="search" />
        <div className="text-ticket">
          <img className="ticket" src={ticket} alt="ticket" />
          BIGLIETTI
        </div>
        <div className="text-shop">
          <img className="shop" src={shop} alt="shop" />
          SHOP
        </div>
        <div className="text-access">
          ACCEDI
          <img className="right-arrow" src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default NavbarDown;
