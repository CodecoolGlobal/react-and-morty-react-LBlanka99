import React from "react";

const CharacterInfo = ({ character }) => {
  return (
    <div className="character-info">
      <h3>Name: {character.name}</h3>
      <br>Gender: {character.gender}</br> <br>Location: {character.location.name}</br>
      <br>Origin: {character.origin.name}</br>
      <br>Status: {character.status}</br>
    </div>
  );
};

export default CharacterInfo;
