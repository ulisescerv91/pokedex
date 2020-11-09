/* eslint-disable react/prop-types */
import React from 'react'

import './TypePokemon.css'
export default function TypePokemon(props) {
    const {type} = props;
    return (
        <div className='typePokemon'>
            <span className={`${type}`}>
                {type.toUpperCase() }
            </span>
        </div>
    )
}
