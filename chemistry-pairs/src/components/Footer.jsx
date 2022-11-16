import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        {new Date().getFullYear()} <span>Chemistry Pairs </span>Built with{" "}
        <a href="https://reactjs.org/">React</a>
      </p>
    </footer>
  );
};

export default Footer;
