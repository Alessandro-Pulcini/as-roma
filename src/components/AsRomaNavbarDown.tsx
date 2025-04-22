import React from "react";
import { asRomaNavbarList } from "../utils/data";

const RomaNavbarDown = () => {
  return (
    <div className="navbar-down">
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
  );
};

export default RomaNavbarDown;
