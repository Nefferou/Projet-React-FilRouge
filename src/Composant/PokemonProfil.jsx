import React from 'react';
import Type from './Type'
import '../Style/App.css';

function PokemonProfil({items}){

    console.log(items)

    return (
        <div className="pokemonProfil">
            <img src={items.image} alt="" />
            <div>
                <h1>No.{items.id}</h1>
                <h1>{items.names["fr"]}</h1>
                <Type typeOne={items.types[0]} typeTwo={items.types[1]} />
                <div className='attribut'>
                    <h1>Height = {items.height} kg</h1>
                    <h1>Weight = {items.weight} cm</h1>
                </div>
            </div>
        </div>
    );
}

export default PokemonProfil;