/* eslint-disable react/prop-types */
import React from 'react'
import './StatsPokemon.css'

export default function StatsPokemon(props) {
    const {pokemon} = props;
    
    return (
        <div className='stats'>
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
    )
}
