/* eslint-disable react/prop-types */
import React from 'react'
import WhoIs from '../../../images/whois.jpg'

import './ItemList.css'

export default function ItemList(props) {
    const {pokemon,openModal} = props;

    const setIdPokemon = (id) =>{
        return (id<10) ? `00${id}` :  (id<100) ? `0${id}` : id
    }


    return (
        <div className="ItemList" onClick={()=>openModal(pokemon)}>
            <img  src={(pokemon.sprites.front_default === null) ? WhoIs : pokemon.sprites.front_default} className='ItemList__img' alt={'name'} />
            <div className="ItemList__data">
                <span className='ItemList__data__name'>
                    {pokemon.name}
                </span>
                <span className='ItemList__data__number'>
                    #{setIdPokemon(pokemon.id)}
                </span>
            </div>
        </div>
    )
}
