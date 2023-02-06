import React, { useEffect, useState } from 'react';
import './Style/App.css';
import Header from './Composant/Header'
import Pokedex from './Composant/Pokedex'

function App() {
  const [lang, setLang] = useState("fr");
  const [search, setSearch] = useState("");

  const [items, setItems] = useState([]);
  const [load, isLoad] = useState(true);

  useEffect(function(){
    callAPI(setItems, isLoad);
  }, [])

  console.log(items);
  
  return (
    <div className="App">
      {load ? <div className='loading'>Loading ...</div> :
      <div>
        <Header changeLang={setLang} changeSearch={setSearch}/>
        <Pokedex pokemons={items} lang={lang} search={search}/>
      </div>}
    </div>
  );
}

function callAPI(setItems, isLoad) {
  isLoad(true)
  fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
    .then(res => res.json())
    .then(
      (result) => {
        isLoad(false)
        setItems(result)
      }
    )
}

export default App;
