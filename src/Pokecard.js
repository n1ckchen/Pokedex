import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="Pokecard">
      <h3>{props.name}</h3>
      <img src={imgURL} />
      <h3>Type: {props.type}</h3>
      <h3>EXP: {props.exp}</h3>
    </div>
  );
};

export default Pokecard;
