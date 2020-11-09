/* eslint-disable react/prop-types */
import React from 'react'

import './ItemList.css'

export default function ItemList(props) {
    const {pokemon,openModal} = props;
    return (
        <div className="ItemList" onClick={()=>openModal(pokemon)}>
            <img  src={pokemon.sprites.front_default} className='ItemList__img' alt={'name'} />
            <div className="ItemList__data">
                <span className='ItemList__data__name'>
                    {pokemon.name}
                </span>
                <span className='ItemList__data__number'>
                    001
                </span>
            </div>
        </div>
    )
}
