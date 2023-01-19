import React, { useState, useEffect } from "react";
import { mainUrls } from "../api/dataRoutes";
import CharacterCard from "./characterCard";
import PageButton from "./PageButton";

const Characters = ({currentPage, setCurrentPage}) => {
  const [characters, setCharacters] = useState(null);
  const pageListLength = 9;
  
  let pageList = [];
  if (characters) {
    let firstPageNumber;
    if (currentPage <= pageListLength / 2) {
      firstPageNumber = Math.max(currentPage - Math.floor(pageListLength / 2), 1);
    } else {
      firstPageNumber = Math.min(currentPage - Math.floor(pageListLength / 2), characters.info.pages - (pageListLength - 1));
    }
    pageList = Array.from( {length: pageListLength}, (v, i) => i + firstPageNumber);
  } 
   
  

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);
  
  const fetchCharacters = (page) => {
    setCharacters(null);
    fetch(`${mainUrls.characters}${page}`)
    .then(res => res.json())
    .then(characters => setCharacters(characters))
  }



  const jumpTo = (number) => {
    setCurrentPage(number);
  }


  return (
    <div>
      <div className="character-list">
      {characters && characters.results.map(character => <CharacterCard character={character} key={character.id}/>)}
      </div>
      <div className="nav-buttons">
        {characters?.info.prev ? (
          <button className="active-button" onClick={() => jumpTo(currentPage - 1)}>Previous page</button>
        ) : (
          <button disabled>Previous page</button>
        )}
        <div className="page-buttons">
          {pageList.map(pageNumber => <PageButton jumpTo={jumpTo} page={pageNumber} currentPage={currentPage} key={pageNumber}/>)}
          
        </div>
        {characters?.info.next ? (
          <button className="active-button" onClick={() => jumpTo(currentPage + 1)}>Next page</button>
        ) : (
          <button disabled>Next page</button>
        )}
        
      </div>
    </div>
  );
};

export default Characters;
