import React, { useState } from "react";

const LocationCard = ({ location }) => {
  const [isFlipped, setFlipped] = useState(false);

  const locationDisplay = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div onClick={locationDisplay} className="location-card">
      <div className={`flip-card-inner ${isFlipped ? "flipped" : null}`}>
        <div className="flip-card-front">
          <div className="card-info">
            Name: {location.name}<br />
            Type: {location.type}<br />
          </div>
        </div>
        <div className="flip-card-back">
          <h3>Name: {location.name}</h3>
          <br />
          Dimension: {location.dimension}
          <br />
          Number of residents: {location.residents.length}
        </div>
      </div>
    </div>
  )
}

export default LocationCard;