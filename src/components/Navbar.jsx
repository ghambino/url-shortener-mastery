import React, { useState } from "react";
import "./navbar.css";
import logo from "../images/logo.svg";
import closeMenu from "../images/icon-close-menu.svg";
import hamburger from "../images/icon-menu.svg";
import { links } from "../utilities/helper";

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <nav>
      <div className="logoHolder">
        <img src={logo} alt="shortly logo" className="logo" />
      </div>
      <div className="menu-button">
        <img
          src={menuClicked ? closeMenu : hamburger}
          alt="menuBar"
          onClick={() => setMenuClicked(!menuClicked)}
        />
      </div>
      <div className={menuClicked ? "nav-menu active": "nav-menu"}>
        <ul className="linkBox">
          {links.map((unit, index) => (
              <li className="link" key={index}>
                {unit}
              </li>
          ))}
        </ul>
        <div className="login">
          <button>Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
