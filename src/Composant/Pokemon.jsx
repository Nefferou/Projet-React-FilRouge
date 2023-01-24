import React from "react"
import "../Style/style.css"
import "../Style/type.css"

function Pokemon({id, name, sprite, type1, type2}) {

    return (
        <div className="pokemon">
            <p>No.{id}</p>
            <h1>{name}</h1>
            <img src={sprite} alt="" />
            <Type typeOne={type1} typeTwo={type2} />
        </div>
    );
}

function Type({typeOne, typeTwo}) {

    if(typeTwo != null){
        return <div className="type">
            <p>{color(typeOne)}</p>
            <p>{color(typeTwo)}</p>
        </div>
    }

    else {
        return <div className="type">
            <p>{color(typeOne)}</p>
        </div>
    }
}

function color(type) {
    switch (type) {
        case "normal": return <p className="normal">NORMAL</p>
        case "fire": return <p className="fire">FIRE</p>
        case "grass": return <p className="grass">GRASS</p>
        case "water": return <p className="water">WATER</p>
        case "electric": return <p className="electric">ELECTRIC</p>

        case "flying": return <p className="flying">FLYING</p>
        case "ground": return <p className="ground">GROUND</p>
        case "rock": return <p className="rock">ROCK</p>
        case "psychic": return <p className="psychic">PSYCHIC</p>
        case "fighting": return <p className="fighting">FIGHTING</p>

        case "bug": return <p className="bug">BUG</p>
        case "poison": return <p className="poison">POISON</p>
        case "steel": return <p className="steel">STEEL</p>
        case "ghost": return <p className="ghost">GHOST</p>
        case "ice": return <p className="ice">ICE</p>
        case "dark": return <p className="dark">DARK</p>

        case "fairy": return <p className="fairy">FAIRY</p>
        case "dragon": return <p className="dragon">DRAGON</p>
        
        default: return <p className="normal"></p>
    } 

}

export default Pokemon;