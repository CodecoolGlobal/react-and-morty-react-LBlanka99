import React from "react";

const LocationCard = ({location}) => {
  return (
    <div className="location-card">
      <div className="location-info">
        Name: {location.name}<br/>
        Type: {location.type}<br/>
      </div>
    </div>
  )
}

export default LocationCard;