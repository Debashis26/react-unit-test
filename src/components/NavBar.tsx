import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li id="component_1">
        <Link to="/">Component 1</Link>
        </li>
        <li id="component_2">
          <Link to="/comp2" >Component 2</Link>
        </li>
        <li id="component_3">
          <Link to="/comp3">Component 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
