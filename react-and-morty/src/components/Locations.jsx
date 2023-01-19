import React, { useState, useEffect } from "react"
import { mainUrls } from "../api/dataRoutes";
import LocationCard from "./locationCard";
import PageButton from "./PageButton";

const Locations = ({currentPage, setCurrentPage}) => {
  const [locations, setLocations] = useState(null);
  const pageList = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    fetchLocations(currentPage);
  }, [currentPage]);
  
  const fetchLocations = (page) => {
    fetch(`${mainUrls.locations}${page}`)
    .then(res => res.json())
    .then(locations => setLocations(locations))
  };

  const jumpTo = (number) => {
    setCurrentPage(number);
  };


  return (
    <div>
      <div className="location-list">
      {locations && locations.results.map(location => <LocationCard location={location} key={location.id}/>)}
      </div>
      <div className="nav-buttons">
        {locations?.info.prev ? (
          <button onClick={() => jumpTo(currentPage - 1)} className="active-button">Previous page</button>
        ) : (
          <button disabled>Previous page</button>
        )}
        <div className="page-buttons">
          {pageList.map(page => <PageButton page={page} currentPage={currentPage} jumpTo={jumpTo} key={page} />)}
        </div>
        {locations?.info.next ? (
          <button onClick={() => jumpTo(currentPage + 1)} className="active-button">Next page</button>
        ) : (
          <button disabled>Next page</button>
        )}
    
      </div>
  </div>
  )
}

export default Locations;