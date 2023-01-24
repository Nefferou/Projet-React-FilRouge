import React from "react";
import "../Style/style.css"

function Header({lang, changeLang}) {
    return (
        <div id="header">
            <img src="https://moodle.ynov.com/pluginfile.php/717462/mod_resource/content/0/logo%20Pokedex.svg" alt="Logo"/>
            <div></div>
            <button id="lang" onClick={() => lang === "fr" ? changeLang("en") : changeLang("fr")}>Switch Lang</button>
        </div>
    );
}

export default Header;