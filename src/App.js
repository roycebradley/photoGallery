import './App.css';
import Menu from './components/menu';
import photos from "./photos";
import Mobilenav from "./components/mobileNav";
import Grid from "./components/Grid"
import ReactPlayer from "react-player"

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
// Github - complete
// Domain + Publishing


function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}


function displayPhoto(source){
  if (isURL(source.src)) {
    return(
      <div className='five' key={source.key}>
        <ReactPlayer className='react-player' width='95%' height='100%' url={source.src} />
      </div>
    );
  }
  else {
    return(
      <div className={source.id} key={source.key}>
        <img src={source.src} />
      </div>
    );
  }
}

// function display3(source){
//     return(
//       source.key > 2
//     );
// }

// const greater2 = photos.filter(display3) 
// console.log(greater2);

function App() {
  return (
    <div className="App">
      <label htmlFor='mycheckbox'><a className='mobileIcon'><img className='burgerIcon' src="https://img.icons8.com/cotton/64/000000/menu.png" /></a></label>
      <input type='checkbox' id='mycheckbox'></input>
      <Mobilenav />
      <div className='menu'><Menu /></div>
      <Grid />
      </div>
  );
}

export default App;
