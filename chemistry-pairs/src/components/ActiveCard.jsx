const ActiveCard = ({ index, chemPairs }) => {
  return (
    <a
      href={chemPairs[index].wikipedia}
      title={`click for wikipedia article about ${chemPairs[index].name}`}
    >
      {" "}
      <img
        className="grid-img show-link"
        key={index}
        src={chemPairs[index].altImage}
        alt="Chemistry pairs logo"
      ></img>
      <div className="img-text">
        <h4>{chemPairs[index].name}</h4>
      </div>
    </a>
  );
};

export default ActiveCard;
