import "./App.css";
import Layout from "./components/Layout";
import logo from "./assets/chemistry.svg";
import chemistryCard from "./assets/chemistrycard.svg";
import { useEffect, useState } from "react";
import ethanol from "./assets/ethanol.svg";
import paracetamol from "./assets/paracetamol.svg";
import altParacetamol from "./assets/altParacetamol.svg";
import altEthanol from "./assets/altEthanol.svg";

function App() {
  const handleOnMouseOver = (index) => {
    console.log(index, "index in handle mouse");
  };

  const sourceFTN = (index) => {
    console.log(index, hover, "index, hover");
    if (flipped.includes(index) || found.includes(index)) {
      return chemPairs[index].image;
    } else return chemistryCard;
  };

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const [size, setSize] = useState(4);
  const [flipped, setFlipped] = useState([]);
  const [chemPairs, setChemPairs] = useState([]);
  const [found, setFound] = useState([]);
  const [allowFlip, setAllowFlip] = useState(true);

  console.log(flipped, "flipped");

  useEffect(() => {
    const chemicals = [
      { image: ethanol, altImage: altEthanol },
      { image: paracetamol, altImage: altParacetamol },
    ];

    setChemPairs(shuffle(chemicals.concat(chemicals)));
  }, []);

  useEffect(() => {
    if (
      flipped.length === 2 &&
      chemPairs[flipped[0]] === chemPairs[flipped[1]]
    ) {
      setFlipped([]);
      setFound([...found, ...flipped]);
    }
    if (flipped.length === 2) {
      setAllowFlip(false);
      let timer1 = setTimeout(() => setFlipped([]), 1000);
      return () => {
        setAllowFlip(true);
        clearTimeout(timer1);
      };
    }
  }, [flipped, chemPairs, found]);

  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(chemistryCard);
  }

  const handleOnClick = (index) => {
    if (allowFlip && !flipped.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };
  return (
    <Layout>
      <section className="game-container">
        <div
          className={`${size === 2 ? "two" : ""} ${size === 3 ? "three" : ""} ${
            size === 4 ? "four" : ""
          }${size === 5 ? "five" : ""} pair-grid`}
        >
          {array.map((backImg, index) => {
            chemPairs.length &&
              console.log(chemPairs[index].image, "CHEM PAIRS image");
            return (
              <>
                <img
                  className="grid-img"
                  key={index}
                  src={sourceFTN(index)}
                  alt="Chemistry pairs logo"
                  onClick={() => handleOnClick(index)}
                ></img>
              </>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
export default App;
