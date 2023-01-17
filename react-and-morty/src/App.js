import React, { useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Locations from "./components/Locations";
import CharacterInfo from "./components/CharacterInfo";

function App() {
  const [display, setDisplay] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [locations, setLocations] = useState(null);
  const [characterInfo, setCharacterInfo] = useState(null);

  const showCharacters = () => {
    setDisplay("Characters");
  };

  const characterDisplay = (character) => {
    setCharacterInfo("visible");
  };

  const showLocations = () => {
    setDisplay("Locations");
  };
  let element;

  if (display === "Characters") {
    element = <Characters characterDisplay={characterDisplay} />;
  }

  if (display === "Locations") {
    element = <Locations />;
  }

  return (
    <div className="App">
      <Home showCharacters={showCharacters} showLocations={showLocations} />
      {element}
    </div>
  );
}

export default App;
