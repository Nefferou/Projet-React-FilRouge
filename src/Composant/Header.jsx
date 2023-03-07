import React from "react";
import LangageSelector from "./LangageSelector";
// import SearchBar from "./SearchBar";
import pokedex from "../Ressource/pokedex.png"
import { Grid, TextField } from "@mui/material";
import "../Style/style.css"

function Header({changeLang, changeSearch}) {
    return (
        <Grid id="header" container direction="row" justifyContent="space-between" alignItems="center">
            <img src={pokedex} alt="" />
            <TextField id="filled-search" label="Search name or type" type="search" variant="outlined" onChange={event => changeSearch(event.target.value)}/>
            <LangageSelector changeLang={changeLang} />
        </Grid>
    );
}

export default Header;
