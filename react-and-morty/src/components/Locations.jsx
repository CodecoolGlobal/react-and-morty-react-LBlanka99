import React, { useState, useEffect } from "react"
import { mainUrls } from "../api/dataRoutes";
import LocationCard from "./locationCard";

const Locations = () => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetchLocations();
  }, []);
  
  const fetchLocations = () => {
    setLocations(null);
    fetch(mainUrls.locations)
    .then(res => res.json())
    .then(res => res.results)
    .then(locations => setLocations(locations))
  }

  return (
    <div>
      <div className="location-list">
      {locations && locations.map(location => <LocationCard location={location} key={location.id}/>)}
      </div>
      <div className="nav-buttons">
    <button>Previous page</button>
    <button>Next page</button>
      </div>
  </div>
  )
}

export default Locations;