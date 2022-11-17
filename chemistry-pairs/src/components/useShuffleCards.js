import React from "react";
import { useEffect, useState } from "react";
import ethanol from "../assets/ethanol.svg";
import paracetamol from "../assets/paracetamol.svg";
import altParacetamol from "../assets/altParacetamol.svg";
import altEthanol from "../assets/altEthanol.svg";

const useShuffleCards = (chemPairs) => {
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
  ];

  return shuffle(chems.concat(chems));
};

export default useShuffleCards;
