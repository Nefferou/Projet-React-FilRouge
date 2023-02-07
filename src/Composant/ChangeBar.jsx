import React from 'react';
import { Link } from 'react-router-dom';

function ChangeBar({items}) {

    const idP = items.id - 1
    const id = items.id;
    const idS = items.id + 1

    return (
        <div className='changeBar'>
            <Link to={"/profil/"+idP}><input type={'button'} /></Link>
            <div>
                <h1>No.{id}</h1>
                <img src={items.image} alt="" />
            </div>
            <Link to={"/profil/"+idS}><input type={'button'} /></Link>
        </div>
    );
}

export default ChangeBar;