import React from "react";

import { Slider } from "@mui/material";

const Header = ({ score, changeValue, size }) => {
  return (
    <header className="head">
      <div className="flex-container">
        <Slider
          value={size}
          min={4}
          step={4}
          max={16}
          aria-label="Restricted values"
          sx={{ width: "100px", ml: "20px" }}
          defaultValue={4}
          getAriaLabel={() => "Date range"}
          marks={[4, 8, 12, 16]}
          onChange={changeValue}
          valueLabelDisplay="auto"
        />

        {/* <img src={logo} alt="Chemistry pairs logo" /> */}
        <h1>Chemistry Pairs</h1>
        <h2>
          Pairs:<br></br> {score}/{size / 2}
        </h2>
      </div>
    </header>
  );
};

export default Header;
