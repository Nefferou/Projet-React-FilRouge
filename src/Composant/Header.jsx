import React from "react";
import "../Style/style.css"

function Header() {
    return (
        <div id="header">
            <img src="https://moodle.ynov.com/pluginfile.php/717462/mod_resource/content/0/logo%20Pokedex.svg" alt="Logo"/>
            <div></div>
            <div id="lang"></div>
        </div>
    );
}

export default Header;