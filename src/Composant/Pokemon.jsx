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
        case "normal": return <p className="normal">{type}</p>
        case "fire": return <p className="fire">{type}</p>
        case "grass": return <p className="grass">{type}</p>
        case "water": return <p className="water">{type}</p>
        case "electric": return <p className="electric">{type}</p>

        case "flying": return <p className="flying">{type}</p>
        case "ground": return <p className="ground">{type}</p>
        case "rock": return <p className="rock">{type}</p>
        case "psychic": return <p className="psychic">{type}</p>
        case "fighting": return <p className="fighting">{type}</p>

        case "bug": return <p className="bug">{type}</p>
        case "poison": return <p className="poison">{type}</p>
        case "steel": return <p className="steel">{type}</p>
        case "ghost": return <p className="ghost">{type}</p>
        case "ice": return <p className="ice">{type}</p>
        case "dark": return <p className="dark">{type}</p>

        case "fairy": return <p className="fairy">{type}</p>
        case "dragon": return <p className="dragon">{type}</p>
        
        default: return <p className="normal">{type}</p>
    } 

}

export default Pokemon;