import React, { useState } from 'react';
import './Style/App.css';
import Header from './Composant/Header'
import Pokedex from './Composant/Pokedex'

function App() {
  const [lang, setLang] = useState("fr");

  return (
    <div className="App">
      <Header lang={lang} changeLang={setLang}/>
      <Pokedex lang={lang} />
    </div>
  );
}

export default App;
