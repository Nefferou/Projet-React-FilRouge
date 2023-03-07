import {React, useState} from "react"
import PokemonBoxDialog from "./PokemonBoxDialog";
import "../Style/style.css"
import "../Style/type.css"
import Dialog from '@mui/material/Dialog';
import Type from "./Type"

function PokemonBox({id, name, sprite, type1, type2}) {

    const [ids, setIds] = useState(id);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setIds(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="pokemonBox">
            <button onClick={handleClickOpen}>
                <p>No.{id}</p>
                <h1>{name}</h1>
                <img src={sprite} alt="" />
                <Type typeOne={type1} typeTwo={type2} />
            </button>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <PokemonBoxDialog id={ids} changeId={setIds}/>
            </Dialog>
        </div>
    );
}

export default PokemonBox;