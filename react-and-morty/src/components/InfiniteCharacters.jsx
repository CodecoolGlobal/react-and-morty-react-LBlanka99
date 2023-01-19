/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { mainUrls } from "../api/dataRoutes";
import CharacterCard from "./characterCard";

const InfiniteCharacters = ({currentPage, setCurrentPage}) => {
    const [characters, setCharacters] = useState([]);
    const [loadText, setLoadText] = useState(null);
    const [isFetching, setIsFetching] = useState(true);


    useEffect(() => {
        fetchCharacters(currentPage);
      }, [currentPage]);
    
    const fetchCharacters = (page) => {
        fetch(`${mainUrls.characters}${page}`)
        .then(res => res.json())
        .then(res => {
            setCharacters([...characters, ...res.results]);
            setIsFetching(false);
            setLoadText(null);
        });
    };

    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (isFetching) {
            return;
        };
        
        if (scrollTop + clientHeight >= scrollHeight && currentPage < 42) {
            setCurrentPage(currentPage + 1);
            setLoadText("Loading...");
        } else if (currentPage >= 42) {
            setLoadText("No more characters");
        };
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    }, [isFetching, currentPage]);


  return (
    <div>
    <div className="character-list">
        {characters.length > 0 && characters.map(character => <CharacterCard character={character} key={character.id} />)}
    </div>
    <div id="loading-text">{loadText}</div>
    </div>
  )
}

export default InfiniteCharacters;