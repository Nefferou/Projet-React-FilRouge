import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/App.css';
import PokemonProfil from '../Composant/PokemonProfil'

function Profil() {

    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [load, isLoad] = useState(true);
  
    useEffect(function () {
      isLoad(true)
      fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
        .then(res => res.json())
        .then(
          (result) => {
            isLoad(false)
            setItems(result)
          }
        )
    }, [])

    console.log(items)

    return (
        <div className='profil'>
            {load ? 
            <div className='loading'>Loading ...</div> 
            :
            <div>
                <PokemonProfil items ={items[id-1]} />
            </div>
            }
        </div>
    );
}

export default Profil;