import React from "react";
import { useEffect, useState } from "react";
import ethanol from "../assets/ethanol.svg";
import paracetamol from "../assets/paracetamol.svg";
import altParacetamol from "../assets/altParacetamol.svg";
import altEthanol from "../assets/altEthanol.svg";
import caffeine from "../assets/caffeine.svg";
import altCaffeine from "../assets/altCaffeine.svg";
import propanol from "../assets/propanol.svg";
import altPropanol from "../assets/altPropanol.svg";
import propane from "../assets/propane.svg";
import altPropane from "../assets/altPropane.svg";
import sucrose from "../assets/sucrose.svg";
import altSucrose from "../assets/altSucrose.svg";
import isopropanol from "../assets/isopropanol.svg";
import altIsopropanol from "../assets/altIsopropanol.svg";
import water from "../assets/water.svg";
import altWater from "../assets/altWater.svg";

const shuffleCards = (size) => {
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const chems = [
    {
      image: ethanol,
      altImage: altEthanol,
      wikipedia: "https://en.wikipedia.org/wiki/Ethanol",
      name: "ethanol",
    },
    {
      image: paracetamol,
      altImage: altParacetamol,
      wikipedia: "https://en.wikipedia.org/wiki/Paracetamol",
      name: "paracetamol",
    },
    {
      image: caffeine,
      altImage: altCaffeine,
      wikipedia: "https://en.wikipedia.org/wiki/Caffeine",
      name: "caffeine",
    },
    {
      image: propanol,
      altImage: altPropanol,
      wikipedia: "https://en.wikipedia.org/wiki/Propan-1-ol",
      name: "propanol",
    },
    {
      image: propane,
      altImage: altPropane,
      wikipedia: "https://en.wikipedia.org/wiki/Propane",
      name: "propane",
    },
    {
      image: sucrose,
      altImage: altSucrose,
      wikipedia: "https://en.wikipedia.org/wiki/Sucrose",
      name: "sucrose",
    },
    {
      image: isopropanol,
      altImage: altIsopropanol,
      wikipedia: "https://en.wikipedia.org/wiki/Isopropanol",
      name: "isopropanol",
    },
    {
      image: water,
      altImage: altWater,
      wikipedia: "https://en.wikipedia.org/wiki/Water",
      name: "water",
    },
  ];

  // console.log(shuffle(chems), "chems", size);

  const suffled = shuffle(chems).slice(0, size / 2);
  // console.log(suffled, "shuffled");

  return shuffle(suffled.concat(suffled));
};

export default shuffleCards;
