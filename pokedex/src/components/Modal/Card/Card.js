/* eslint-disable react/prop-types */
import React,{useState}  from 'react'
import WhoIs from '../../../images/whois.jpg';

import './Card.css'
import TypePokemon from './TypePokemon/TypePokemon';
import ChartPokemon from './ChartPokemon/ChartPokemon'
import StatsPokemon from './StatsPokemon/StatsPokemon';
import CheckBox from './CheckBok/CheckBox'
export default function Card(props) {
    const { pokemon ,closeModal } = props
    const [showChart, setShowChart] = useState(false)

    const setIdPokemon = (id) =>{
        return (id<10) ? `00${id}` :  (id<100) ? `0${id}` : id
    }
    return (
        <div className='card'>

            <div className="closeBtn" onClick={closeModal}>X</div>
            <div className='card__description  '>
                <div className='card__description__top'>
                    <div className='card__description__top__mainData'>
                        <img src={(pokemon.sprites.front_default === null) ? WhoIs : pokemon.sprites.front_default } className='card__description__top__mainData__img' />
                        <div className='card__description__top__mainData__data'>                        
                            <span className='card__description__top__mainData__data__id'>#{setIdPokemon(pokemon.id)}</span>
                            <span className='card__description__top__mainData__data__name'>{pokemon.name}</span>
                            <span className='card__description__top__mainData__data__type'>
                                {  (pokemon.types) ? <TypePokemon type={pokemon.types[0].type.name}/> : ''}
                            </span>
                        </div>
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
                    {""}
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
