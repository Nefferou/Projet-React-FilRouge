import React from "react";
import LangageSelector from "./LangageSelector";
import "../Style/style.css"

function Header({lang, changeLang}) {
    return (
        <div id="header">
            <img />
            <div></div>
            <LangageSelector changeLang={changeLang} />
        </div>
    );
}

export default Header;
