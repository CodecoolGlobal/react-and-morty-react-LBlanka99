import React, { useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Locations from "./components/Locations";
import InfiniteCharacters from "./components/InfiniteCharacters";
import InfiniteLocations from "./components/InfiniteLocations";

function App() {
  const [display, setDisplay] = useState(null);
  let element;
  const [infiniteScroll, setInfiniteScroll] = useState(false);
  const [currentPageCharacters, setCurrentPageCharacters] = useState(1);
  const [currentPageLocations, setCurrentPageLocations] = useState(1);

  const showCharacters = () => {
    setDisplay("Characters");
  };

  const showLocations = () => {
    setDisplay("Locations");
  };

  const handleToggle = () => {
    if (infiniteScroll) {
      setInfiniteScroll(false);
    } else {
      setInfiniteScroll(true);
    }
  }

  
  if (display === "Characters" && infiniteScroll) {
    element = <InfiniteCharacters currentPage={currentPageCharacters} setCurrentPage={setCurrentPageCharacters}/>;
  } else if (display === "Characters") {
    element = <Characters currentPage={currentPageCharacters} setCurrentPage={setCurrentPageCharacters}/>
  }

  if (display === "Locations" && infiniteScroll) {
    element = <InfiniteLocations currentPage={currentPageLocations} setCurrentPage={setCurrentPageLocations}/>;
  } else if (display === "Locations") {
    element = <Locations currentPage={currentPageLocations} setCurrentPage={setCurrentPageLocations}/>
  }

  return (
    <div className="App">
      <Home showCharacters={showCharacters} showLocations={showLocations} handleToggle={handleToggle}/>
      {element}
    </div>
  );
}

export default App;
