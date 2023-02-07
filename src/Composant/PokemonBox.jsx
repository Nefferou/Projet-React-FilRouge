import React from "react"
import { Link } from "react-router-dom";
import "../Style/style.css"
import "../Style/type.css"
import Type from "./Type"

function PokemonBox({id, name, sprite, type1, type2}) {

    return (
        <div className="pokemonBox">
            <Link to={"profil/"+id}>
                <p>No.{id}</p>
                <h1>{name}</h1>
                <img src={sprite} alt="" />
                <Type typeOne={type1} typeTwo={type2} />
            </Link>
        </div>
    );
}

export default PokemonBox;