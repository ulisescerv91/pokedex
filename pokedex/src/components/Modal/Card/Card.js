/* eslint-disable react/prop-types */
import React,{useState}  from 'react'
import WhoIs from '../../../images/whois.jpg';

import './Card.css'
import TypePokemon from './TypePokemon/TypePokemon';
import ChartPokemon from './ChartPokemon/ChartPokemon'
import StatsPokemon from './StatsPokemon/StatsPokemon';
import CheckBox from './CheckBok/CheckBox'
export default function Card(props) {
    const { pokemon  } = props
    const [showChart, setShowChart] = useState(false)
    return (
        <div className='card'>

            <div className='card__description  '>
                <div className='card__description__top'>
                    <img src={(pokemon.sprites.front_default === null) ? WhoIs : pokemon.sprites.front_default } className='card__description__top__img' />
                    <div className='card__description__top__data'>
                        <span className='card__description__top__data__id'>#{pokemon.id}</span>
                        <span className='card__description__top__data__name'>{pokemon.name}</span>
                        <span className='card__description__top__data__type'>
                             {  (pokemon.types) ? <TypePokemon type={pokemon.types[0].type.name}/> : ''}
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
            <div className='stats__line'></div>
            {
                showChart ? <ChartPokemon pokemon={pokemon}/> : <StatsPokemon pokemon={pokemon}/>
            }
            <CheckBox active={showChart} toggle={setShowChart} />
                  
        </div>
    )
}
