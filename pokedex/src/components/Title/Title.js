import React from 'react'
import './Title.css';
import PokemonLogo from '../../images/logo-pokemon.png'


export default function Title() {
    return (
        <div className="Title">
            <img src={PokemonLogo} className="imgLogo" alt="Pokemon"/>
        </div>
    )
}
