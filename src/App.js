import React, { useState } from 'react';
import './Style/App.css';
import Header from './Composant/Header'
import Pokedex from './Composant/Pokedex'

function App() {
  const [lang, setLang] = useState("fr");
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header changeLang={setLang} changeSearch={setSearch}/>
      <Pokedex lang={lang} search={search}/>
    </div>
  );
}

export default App;
