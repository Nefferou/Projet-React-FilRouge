import React from "react";

function LangageSelector({changeLang}) {
    return (
        <>
            <tr>
                <td><button onClick={() => changeLang("fr")}>fr</button></td>
                <td><button onClick={() => changeLang("en")}>en</button></td>
                <td><button onClick={() => changeLang("it")}>it</button></td>
            </tr>
            <tr>
                <td><button onClick={() => changeLang("es")}>es</button></td>
                <td><button onClick={() => changeLang("de")}>de</button></td>
                <td><button onClick={() => changeLang("ja")}>ja</button></td>
            </tr>
            <tr>
                <td><button onClick={() => changeLang("zh-hans")}>zh-hans</button></td>
                <td><button onClick={() => changeLang("roomaji")}>roomaji</button></td>
                <td><button onClick={() => changeLang("ko")}>ko</button></td>
            </tr>
        </>
    );
}

export default LangageSelector;