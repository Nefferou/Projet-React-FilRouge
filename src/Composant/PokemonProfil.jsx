import React from 'react';
import Type from './Type'
import ChangeBar from "./ChangeBar"
import '../Style/App.css';

function PokemonProfil({items}){

    console.log(items)

    return (
        <div className="pokemonProfil">
            <ChangeBar items={items}/>
            <div>
                <div className='attribut'>
                    <h1>{items.names["fr"]}</h1>
                    <Type typeOne={items.types[0]} typeTwo={items.types[1]} />
                    <div>
                        <h1>Height = {items.height} kg</h1>
                        <h1>Weight = {items.weight} cm</h1>
                    </div>
                </div>
                <table>
                    <th colSpan="2">Moves</th>
                    {items.moves.map((move) => <tr>{move}</tr>)}
                </table>
            </div>
        </div>
    );
}

export default PokemonProfil;