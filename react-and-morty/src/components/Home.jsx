import logo from "./Logo.png"
const Home = ({showCharacters, showLocations}) => {

  return (
    <div className="home-container">
      <img alt="logo" src={logo} width="750"/>
        <div className="home-buttons">
        <button onClick= {showCharacters}>Characters</button>
        <button onClick= {showLocations}>Locations</button>
        </div>
      <div className="description">
        <h1>Welcome to the Rick and Morty Library</h1>
        <p>You can navigate through the library by clicking on either the Characters button or the Locations button.</p>
        <p>Have fun!</p>
      </div>
    </div>
  )
}

export default Home;