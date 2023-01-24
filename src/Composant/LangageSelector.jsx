import React from "react";
import "../Style/style.css"

function LangageSelector({changeLang}) {
    return (
        <>
            <tr className="langSelector">
                <button onClick={() => changeLang("fr")}>fr</button>
                <button onClick={() => changeLang("en")}>en</button>
                <button onClick={() => changeLang("it")}>it</button>

                <button onClick={() => changeLang("es")}>es</button>
                <button onClick={() => changeLang("de")}>de</button>
                <button onClick={() => changeLang("ja")}>ja</button>

                <button onClick={() => changeLang("zh-hans")}>zh-hans</button>
                <button onClick={() => changeLang("roomaji")}>roomaji</button>
                <button onClick={() => changeLang("ko")}>ko</button>
            </tr>
        </>
    );
}

export default LangageSelector;