import React from "react";
import "../style/nav.css";

const Nav = () => {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img src={require("../assets/logo.png")} />
      </div>
      <div className="navbarContainer">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="siginInNavContainer">
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Nav;
