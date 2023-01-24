import React from 'react';
import './Style/App.css';
import Header from './Composant/Header'
import Pokedex from './Composant/Pokedex'

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex lang='fr'/>
    </div>
  );
}

export default App;
