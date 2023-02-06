import React from "react"
import "../Style/style.css"
import Pokemon from "./Pokemon";
import pokemons from "../Ressource/pokemon.json"

function Pokedex({lang, search}) {

    let i = 0;
    const pokedex = [];
    const tab = [];

    pokemons.forEach((pokemon) =>{
        if(pokemon.names[lang].includes(search)){
            pokedex.push(<Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.names[lang]} sprite={pokemon.image} type1={pokemon.types[0]} type2={pokemon.types[1]} />)
        }
    })

    pokedex.forEach(() => {
        if(i % 6 === 0){
            tab.push(<Line key={i} pokemons={pokedex.slice(i, i+6)}/>)
        }
        i++
    })

    return (
        <div className="pokedex">
            {tab}
        </div>
    );
}

function Line({pokemons}) {
    
    return (
        <div className="line">
            {pokemons.map((pokemon) => pokemon)}
        </div>
    )
}

export default Pokedex;