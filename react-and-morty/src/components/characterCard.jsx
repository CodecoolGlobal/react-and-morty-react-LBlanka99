import React from "react";

const CharacterCard = ({ character, onClick }) => {
  return (
    <div onClick={onClick} className="character-card">
      <img src={character.image} alt="pic" />
      <div className="card-info">
        Name: {character.name}
        <br />
        Species: {character.species}
        <br />
      </div>
    </div>
  );
};

export default CharacterCard;
