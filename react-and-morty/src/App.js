import React, { useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Locations from "./components/Locations";

function App() {
  const [display, setDisplay] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [locations, setLocations] = useState(null);
  //const [characterInfo, setCharacterInfo] = useState("invisible");

  const showCharacters = () => {
    setDisplay("Characters");
  };

  //const characterDisplay = (character) => {
  //  if (characterInfo === "invisible") {
  //    setCharacterInfo("visible");
  //  } else {
  //    setCharacterInfo("invisible");
  //  }
  //};

  const showLocations = () => {
    setDisplay("Locations");
  };
  let element;

  if (display === "Characters") {
    element = <Characters />;
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
