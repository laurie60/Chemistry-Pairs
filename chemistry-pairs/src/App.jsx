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
  const sourceFTN = (index) => {
    if (flipped.includes(index) || found.includes(index)) {
      return chemPairs[index].image;
    }
    // if (activeImage === index) {
    //   return chemPairs[index].altImage;
    // }
    else return chemistryCard;
  };

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const [size, setSize] = useState(4);
  const [flipped, setFlipped] = useState([]);
  const [chemPairs, setChemPairs] = useState([]);
  const [found, setFound] = useState([]);
  const [allowFlip, setAllowFlip] = useState(true);
  const [activeImage, setActiveImage] = useState(-1);
  const [showInfo, setShowInfo] = useState(false);
  const [index, setIndex] = useState(-1);

  console.log(activeImage, "activeImage");

  useEffect(() => {
    const chemicals = [
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

    setChemPairs(shuffle(chemicals.concat(chemicals)));
  }, []);

  // useEffect(() => {
  //   if (activeImage === index && found.includes(activeImage)) {
  //     setShowInfo(true);
  //   }
  // }, [activeImage, found, index]);
  const showContent = (index) => {
    if (activeImage === index && found.includes(activeImage)) {
      setShowInfo(true);
    } else setShowInfo(false);
  };

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

  const activeAndFound = (index) => {
    if (activeImage === index && found.includes(activeImage)) {
      return true;
    }
    return false;
  };

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
            // chemPairs.length &&
            //   console.log(chemPairs[index].image, "CHEM PAIRS image");
            // if (activeImage === index && found.includes(activeImage) {
            //   setShowInfo(true)
            // })

            return (
              <div
                className="card-cont"
                onMouseOver={() => setActiveImage(index)}
                onMouseLeave={() => setActiveImage(-1)}
              >
                <img
                  className={`grid-img ${
                    activeAndFound(index) ? "show-link" : "hide-link"
                  }`}
                  key={index}
                  src={
                    activeAndFound(index)
                      ? chemPairs[index].altImage
                      : sourceFTN(index)
                  }
                  alt="Chemistry pairs logo"
                  onClick={() => handleOnClick(index)}
                ></img>
                {activeImage === index && found.includes(activeImage) ? (
                  <div className="img-text">
                    <a href={chemPairs[index].wikipedia}>
                      {chemPairs[index].name}
                    </a>
                  </div>
                ) : (
                  console.log("no")
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
export default App;
