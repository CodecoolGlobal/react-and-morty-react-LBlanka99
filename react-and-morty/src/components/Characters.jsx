import React, { useState, useEffect } from "react"
import { mainUrls } from "../api/dataRoutes";
import CharacterCard from "./characterCard";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters();
  }, []);
  
  const fetchCharacters = (currentPage = mainUrls.characters) => {
    setCharacters(null);
    fetch(currentPage)
    .then(res => res.json())
    .then(characters => setCharacters(characters))
  }

  const jumpNext = () => {
    fetchCharacters(characters.info.next);
    setPage(page + 1);
  }

  const jumpPrevious = () => {
    fetchCharacters(characters.info.prev);
    setPage(page - 1);
  }

  const jumpTo = (number) => {

  }


  return (
    <div>
      <div className="character-list">
      {characters && characters.results.map(character => <CharacterCard character={character} key={character.id}/>)}
      </div>
      <div className="nav-buttons">
        {characters?.info.prev ? (
          <button className="active-button" onClick={jumpPrevious}>Previous page</button>
        ) : (
          <button disabled>Previous page</button>
        )}
        <div>
          <button onClick={() => jumpTo()} className="active-button">1</button>
          <button onClick={() => jumpTo()} className="active-button">2</button>
          <button onClick={() => jumpTo()} className="active-button">3</button>
          <button onClick={() => jumpTo()} className="active-button">4</button>
          <button onClick={() => jumpTo()} className="active-button">{page}</button>
          <button onClick={() => jumpTo()} className="active-button">6</button>
          <button onClick={() => jumpTo()} className="active-button">7</button>
          <button onClick={() => jumpTo()} className="active-button">8</button>
          <button onClick={() => jumpTo()} className="active-button">9</button>
        </div>
        {characters?.info.next ? (
          <button className="active-button" onClick={jumpNext}>Next page</button>
        ) : (
          <button disabled>Next page</button>
        )}
        
      </div>
    </div>
  )

}

export default Characters;