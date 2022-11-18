import React from "react";

const CardUp = ({ index, chemPairs }) => {
  console.log(chemPairs[index].image, "in cardup", chemPairs);
  return (
    <img
      className="grid-img hide-link"
      key={index}
      src={chemPairs[index].image}
      alt="Chemistry pairs logo"
    ></img>
  );
};

export default CardUp;
