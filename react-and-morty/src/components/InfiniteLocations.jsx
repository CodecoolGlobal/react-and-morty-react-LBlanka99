/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import { mainUrls } from "../api/dataRoutes";
import LocationCard from "./locationCard";

const InfiniteLocations = ({currentPage, setCurrentPage}) => {
    const [locations, setLocations] = useState([]);
    const [loadText, setLoadText] = useState(null);
    const [isFetching, setIsFetching] = useState(true);


    useEffect(() => {
        fetchLocations(currentPage);
      }, [currentPage]);
    
    const fetchLocations = (page) => {
        fetch(`${mainUrls.locations}${page}`)
        .then(res => res.json())
        .then(res => {
            setLocations([...locations, ...res.results]);
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
        
        if (scrollTop + clientHeight >= scrollHeight && currentPage < 7) {
            setCurrentPage(currentPage + 1);
            setLoadText("Loading...");
        } else if (currentPage >= 7) {
            setLoadText("No more locations");
        };
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    }, [isFetching, currentPage]);

  return (
    <div>
    <div className="character-list">
        {locations.length > 0 && locations.map(location => <LocationCard location={location} key={location.id}/>)}
    </div>
    <div id="loading-text">{loadText}</div>
    </div>
  )
}

export default InfiniteLocations;