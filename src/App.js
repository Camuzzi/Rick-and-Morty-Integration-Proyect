import './App.css'

import Home from "./views/Home/home.jsx"
import NavBar from './components/NavBar/navbar.jsx';
import About from "./views/About/About.jsx";
import Detail from "./views/Detail/Detail.jsx"

import LandingPage from './views/Landing/landing';
import Favorites from './views/Favorites/favorites';
import ErrorPage from './views/Error/errorpage';

//import styles from "../src/components/App.module.css";
import {useState, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";


function App () {
  const location = useLocation();
  const [input, setInput] = useState("");
  const [characters,setCharacters] = useState([]);


  //*Login
  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  function loginHandler(userData) {
    if (userData.password === password && userData.email === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  //*

  //? LOGOUT
  function logoutHandler() {
    setAccess(false);
    navigate("/");
  }

  //?

  function onChange(e) {
    e.preventDefault();
    let inputValue = e.target.value;

    setInput(inputValue);
  }

  async function onSearch(e) {
    e.preventDefault();

    let found = characters.find((character) => character.id === Number(input));

     if (!found) {
       fetch(`https://rickandmortyapi.com/api/character/${input}`)
         .then((response) => response.json())
         .then((data) => {
           if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
           } else {
             window.alert("No hay personajes con ese ID");
           }
         });
     } else {
       alert("El personaje ya fue agregado");
     }
  }

  function randomCharacter() {
    let haveIt = [];

    let random = (Math.random() * 826).toFixed();

    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      alert("Ya agregaste a todos los personajes");
    }
  }

  function onClose(id) {
    let found = characters.find((character) => character.id === id);
    let deleted = characters.filter((character) => character.id !== found.id);
    setCharacters(deleted);
  }

  return (
    <div className="App">    

       {location.pathname !== "/" &&(
        <NavBar 
        onSearch={onSearch}
        onChange={onChange}
        random={randomCharacter}
        logout={logoutHandler}
       />
       )}

       <Routes>
          <Route exact path="/" element={<LandingPage login={loginHandler} />} />
          <Route path="/home" element={<Home characters={characters} onClose={onClose} />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/favs" element={<Favorites />} />
          <Route path="*" element={<ErrorPage />} />
       </Routes>
    </div>
  )
}

export default App
