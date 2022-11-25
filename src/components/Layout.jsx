import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, score, changeValue, size }) => {
  return (
    <>
      <Header changeValue={changeValue} score={score} size={size} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
