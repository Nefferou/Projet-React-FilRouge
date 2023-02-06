import React from "react";
import LangageSelector from "./LangageSelector";
import SearchBar from "./SearchBar";
import "../Style/style.css"

function Header({changeLang, changeSearch}) {
    return (
        <div id="header">
            <img src="https://moodle.ynov.com/pluginfile.php/717462/mod_resource/content/0/logo%20Pokedex.svg" alt="Logo"/>
            <SearchBar changeSearch={changeSearch} />
            <LangageSelector changeLang={changeLang} />
        </div>
    );
}

export default Header;