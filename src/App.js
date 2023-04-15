import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/navbar';
import About from './components/About/About';
import Detail from "./components/Detail/Detail.jsx"

import styles from "../src/components/App.module.css";
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';

function App () {
  const [input, setInput] = useState("");
  const [characters,setCharacters] = useState([]);


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
    <div className={styles.divPrincipal} style={{ padding: '25px' }}>    
       <NavBar 
        onSearch={onSearch}
        onChange={onChange}
        random={randomCharacter}
       />
       <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
       </Routes>
    </div>
  )
}

export default App
