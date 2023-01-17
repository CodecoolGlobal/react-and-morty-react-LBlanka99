import React, { useState, useEffect } from "react"
import { mainUrls } from "../api/dataRoutes";
import CharacterCard from "./characterCard";

const Characters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);
  
  const fetchCharacters = () => {
    setCharacters(null);
    fetch(mainUrls.characters)
    .then(res => res.json())
    .then(res => res.results)
    .then(characters => setCharacters(characters))
  }

  return (
    <div>
      <div className="character-list">
      {characters && characters.map(character => <CharacterCard character={character} key={character.id}/>)}
      </div>
      <div className="nav-buttons">
        <button>Previous page</button>
        <button>Next page</button>
      </div>
    </div>
  )

}

export default Characters;