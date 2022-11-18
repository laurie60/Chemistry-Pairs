import "./App.css";
import Layout from "./components/Layout";
import logo from "./assets/chemistry.svg";
import chemistryCard from "./assets/chemistrycard.svg";
import { useEffect, useState } from "react";
import shuffleCards from "./components/useShuffleCards";
import CardDown from "./components/CardDown";
import CardUp from "./components/CardUp";
import ActiveCard from "./components/ActiveCard";

function App() {
  const [flipped, setFlipped] = useState([]);
  const [found, setFound] = useState([]);
  const [allowFlip, setAllowFlip] = useState(true);
  const [activeImage, setActiveImage] = useState(-1);
  const [chemPairs, setChemPairs] = useState([]);
  const [size, setSize] = useState(4);

  const changeValue = (event, value) => {
    if (value !== size) {
      setSize(value);
    }
    console.log(size, "size!!!!!");
  };

  useEffect(() => {
    setFound([]);
    setActiveImage(-1);
    setAllowFlip(true);
    setFlipped([]);
    setChemPairs(shuffleCards(size));
    console.log("changin too much");
  }, [size]);

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

  const activeAndFound = (index) => {
    if (activeImage === index && found.includes(activeImage)) {
      return true;
    }
    return false;
  };

  const flip = (index) => {
    if (flipped.includes(index) || found.includes(index)) {
      return true;
    }
    return false;
  };

  const handleOnClick = (index) => {
    if (allowFlip && !flipped.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  const whichCard = (index) => {
    console.log(found, "found");
    console.log(activeAndFound(index));
    if (!flip(index)) {
      return <CardDown index={index} />;
    } else if (flip(index) && activeAndFound(index)) {
      return <ActiveCard index={index} chemPairs={chemPairs} />;
    } else return <CardUp index={index} chemPairs={chemPairs} />;
  };
  return (
    <Layout size={size} changeValue={changeValue} score={found.length / 2}>
      <section className="game-container">
        <div
          className={`${size === 4 ? "four" : ""} ${
            size === 8 ? "eight" : ""
          } ${size === 12 ? "twelve" : ""}${
            size === 16 ? "sixteen" : ""
          } pair-grid`}
        >
          {chemPairs.map((backImg, index) => {
            return (
              <div
                className="card-cont"
                onMouseOver={() => setActiveImage(index)}
                onMouseLeave={() => setActiveImage(-1)}
                onClick={() => handleOnClick(index)}
              >
                {whichCard(index)}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
export default App;
