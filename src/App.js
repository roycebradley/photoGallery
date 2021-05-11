import './App.css';
import Menu from './components/menu';
import photos from "./photos";
import Mobilenav from "./components/mobileNav";

//Inspo: https://www.954mm.com/

//Make Responsive - Complete
//Add CSS Grid - 2 columns - Complete
//add photos to an array and pull in photos using .map() and props - Complete
//Make menu items fixed - Complete
// Finish Menu Items - complete
// Add Responsive Hamburger Menu - complet
// Add links to insta + portfolio - complete
// Refactor and add comments
// Add to wordpress as a template
// Github
// Domain + Publishing


function displayPhoto(source){
  return(
    <div key={source.key}>
      <img src={source.src} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <label htmlFor='mycheckbox'><a className='mobileIcon'><img className='burgerIcon' src="https://img.icons8.com/cotton/64/000000/menu.png" /></a></label>
      <input type='checkbox' id='mycheckbox'></input>
      <Mobilenav />
      <div className='menu'><Menu /></div>
      <div className='container'>
        {photos.map(displayPhoto)}
      </div> 
    </div>
  );
}

export default App;
