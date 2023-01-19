import logo from "./Logo.png"

const Home = ({showCharacters, showLocations, handleToggle, display}) => {


  return (
    <div className="home-container">
      <img alt="logo" src={logo} width="750"/>
        <div className="home-buttons">
        <button className="active-button" onClick= {showCharacters}>Characters</button>
        <button className="active-button" onClick= {showLocations}>Locations</button>
        </div>
        <div id="toggle-box">
        <label className="switch">Infinite scroll: 
          <input  type="checkbox"/>
          <span onClick={handleToggle} className="slider round"></span>
        </label>
        </div>
      {!display && <div className="description">
        <h1>Welcome to the Rick and Morty Library</h1>
        <p>You can navigate through the library by clicking on either the Characters button or the Locations button.</p>
        <p>Have fun!</p>
      </div>}
    </div>
  )
}

export default Home;