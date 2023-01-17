import React from "react";

const CharacterCard = ({ character, onClick }) => {
  return (
    <div onClick={onClick} className="character-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.image} alt="pic" />
          <div className="card-info">
            Name: {character.name}
            <br />
            Species: {character.species}
            <br />
          </div>
        </div>
        <div className="flip-card-back">
          <h3>Name: {character.name}</h3><br />
          Gender: {character.gender}<br />
          Location: {character.location.name}<br />
          Origin: {character.origin.name}<br />
          Status: {character.status}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
