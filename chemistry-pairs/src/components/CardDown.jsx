import chemistryCard from "../assets/chemistrycard.svg";

const CardDown = ({ index }) => {
  return (
    <img
      className="hide-link grid-img"
      key={index}
      src={chemistryCard}
      alt="Chemistry pairs logo"
    ></img>
  );
};

export default CardDown;
