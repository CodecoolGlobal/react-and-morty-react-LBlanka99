import React, { useState, useEffect } from "react"
import { mainUrls } from "../api/dataRoutes";
import LocationCard from "./locationCard";

const Locations = () => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetchLocations();
  }, []);
  
  const fetchLocations = (currentPage = mainUrls.locations) => {
    setLocations(null);
    fetch(currentPage)
    .then(res => res.json())
    .then(locations => setLocations(locations))
  }

  const jumpNext = () => {
    fetchLocations(locations.info.next);
  }

  const jumpPrevious = () => {
    fetchLocations(locations.info.prev);
  }

  return (
    <div>
      <div className="location-list">
      {locations && locations.results.map(location => <LocationCard location={location} key={location.id}/>)}
      </div>
      <div className="nav-buttons">
        {locations?.info.prev ? (
          <button onClick={jumpPrevious} className="active-button">Previous page</button>
        ) : (
          <button disabled>Previous page</button>
        )}
        {locations?.info.next ? (
          <button onClick={jumpNext} className="active-button">Next page</button>
        ) : (
          <button disabled>Next page</button>
        )}
    
      </div>
  </div>
  )
}

export default Locations;