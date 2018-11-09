import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <p>Stuff Curry Clicky-Game</p>
      </li>
      <NavMessage score={props.score} topScore={props.topScore} />
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
