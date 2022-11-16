import "./App.css";
import Layout from "./components/Layout";
import logo from "./assets/chemistry.svg";
import chemistryCard from "./assets/chemistrycard.svg";
import { useState } from "react";
import ethanol from "./assets/ethanol.svg";
import paracetamol from "./assets/paracetamol.svg";

function App() {
  const [size, setSize] = useState(4);
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(chemistryCard);
  }
  console.log(array);
  return (
    <Layout>
      <section className="game-container">
        <div
          className={`${size === 2 ? "two" : ""} ${size === 3 ? "three" : ""} ${
            size === 4 ? "four" : ""
          }${size === 5 ? "five" : ""} pair-grid`}
        >
          {array.map((image, index) => {
            return (
              <>
                <img
                  className="grid-img"
                  key={index}
                  src={image}
                  alt="Chemistry pairs logo"
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
