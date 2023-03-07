import React from "react";
import { Grid, Button } from "@mui/material";
import "../Style/style.css"

function LangageSelector({changeLang}) {
    return (
        <Grid id="grid" container direction="column" justifyContent="space-between" alignItems="center">
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Button onClick={() => changeLang("fr")}>FR</Button>
                <Button onClick={() => changeLang("en")}>EN</Button>
                <Button onClick={() => changeLang("it")}>IT</Button>
            </Grid>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Button onClick={() => changeLang("es")}>ES</Button>
                <Button onClick={() => changeLang("de")}>DE</Button>
                <Button onClick={() => changeLang("ja")}>JA</Button>
            </Grid>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Button onClick={() => changeLang("zh-Hant")}>ZH</Button>
                <Button onClick={() => changeLang("roomaji")}>RO</Button>
                <Button onClick={() => changeLang("ko")}>KO</Button>
            </Grid>
        </Grid>
    );
}

export default LangageSelector;