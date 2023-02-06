import React from "react";
import LangageSelector from "./LangageSelector";
import SearchBar from "./SearchBar";
import pokedex from "../Ressource/pokedex.png"
import "../Style/style.css"

function Header({changeLang, changeSearch}) {
    return (
        <div id="header">
            <img src={pokedex}/>
            <SearchBar changeSearch={changeSearch} />
            <LangageSelector changeLang={changeLang} />
        </div>
    );
}

export default Header;
