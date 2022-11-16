import React from "react";
import logo from "../assets/chemistry.svg";

const Header = () => {
  console.log(logo, "logo in header");
  return (
    <header className="head">
      <img src={logo} alt="Chemistry pairs logo" />
      <h1>Chemistry Pairs</h1>
    </header>
  );
};

export default Header;
