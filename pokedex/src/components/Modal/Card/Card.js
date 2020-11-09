/* eslint-disable react/prop-types */
import React from 'react'

import './Card.css'
import TypePokemon from './TypePokemon/TypePokemon'

export default function Card(props) {
    const { pokemon } = props
    return (
        <div className='card'>

            <div className='card__description  '>
                <div className='card__description__top'>
                    <img src={pokemon.sprites.front_default} className='card__description__top__img' />
                    <div className='card__description__top__data'>
                        <span className='card__description__top__data__id'>#{pokemon.id}</span>
                        <span className='card__description__top__data__name'>{pokemon.name}</span>
                        <span className='card__description__top__data__type'>
                             <TypePokemon type={pokemon.types[0].type.name}/>
                        </span>
                    </div>
                    <div className='card__description__top__size'>
                        <div className='card__description_top__size__height'>
                            <span> <b>Height:</b> {pokemon.height}m</span>
                        </div>
                        <div className='card__description_top__size__weight'>
                            <span> <b>Weight:</b> {pokemon.weight}Kg</span>
                        </div>
                    </div>
                </div>
                <div className='card__description__bottom'>
                    {"Lorem impasd asdae"}
                </div>
            </div>
            <div className='stats'>
                <div className='stats__line'></div>
                {
                    pokemon.stats.map((stat, i) => {
                        return (
                            <div key={i} className='stat'>
                                <span className='stat__name'>{stat.stat.name}</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: stat.base_stat }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    <span className='stat_percentage' >{stat.base_stat}</span>
                                </div>


                            </div>
                        )
                    }) 
                }


            </div>
        </div>
    )
}
