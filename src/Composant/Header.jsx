import React from "react";
import LangageSelector from "./LangageSelector";
import pokedex from "../Ressources/pokedex.png"
import "../Style/style.css"

function Header({lang, changeLang}) {
    return (
        <div id="header">
            <img src={pokedex}/>
            <div></div>
            <LangageSelector changeLang={changeLang} />
        </div>
    );
}

export default Header;
