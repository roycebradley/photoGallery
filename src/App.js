import './App.css';
import Menu from './components/menu';
import Mobilenav from "./components/mobileNav";
import Grid from "./components/Grid";
import { useState } from 'react';

//Inspo: https://www.954mm.com/


//checks if argument is a URL

// function isURL(str) {
//   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
//   '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//   '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//   '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//   return pattern.test(str);
// }

// map photos from photos array from photos.js


// function displayPhoto(source){
//   if (isURL(source.src)) {
//     return(
//       <div className='five' key={source.key}>
//         <ReactPlayer className='react-player' width='95%' height='100%' url={source.src} />
//       </div>
//     );
//   }
//   else {
//     return(
//       <div className={source.id} key={source.key}>
//         <img src={source.src} />
//       </div>
//     );
//   }
// }


function App() {

  const [isScrollDown, setScrollDown] = useState(false);


  function verticalHeight() {
    if (window.scrollY > 238) {
      setScrollDown(true);
    }
    else{
      setScrollDown(false);
    }
  }

  function scrollDown() {
    document.addEventListener('scroll', verticalHeight)
  }

  function smoothScroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      {scrollDown()}
      <label htmlFor='mycheckbox'><a className='mobileIcon'><img className='burgerIcon' src="https://img.icons8.com/cotton/64/000000/menu.png" /></a></label>
      <input type='checkbox' id='mycheckbox'></input>
      <Mobilenav />
      <div className='menu'><Menu /></div>
      <a onClick={smoothScroll} href=""><img
        id="arrow"
        className="upArrow"
        style={{ display: isScrollDown ? 'block' : 'none' }}
        src="/photos/up-arrow.png" alt="hi"></img>
      </a>
      <Grid />
      </div>
  );
}

export default App;
