/* eslint-disable react/prop-types */

import React from 'react'
import {Radar} from "react-chartjs-2";
export default function ChartPokemon(props) {
    const {pokemon} = props;
    let labels = pokemon.stats.map(item => item.stat.name);
    let data=pokemon.stats.map(item => item.base_stat);
    


    const radarData = {
        labels: labels,
        datasets: [          
          {
            backgroundColor: 'rgba(64, 165, 236, 0.2)',
            borderColor: 'rgba(64, 165, 236, 1)',
            pointBorderColor: 'rgba(64, 165, 236, 1)',
            pointBackgrounColor: 'rgba(255, 0, 0, 1)',
            pointRadius: 1,
            data: data
          }
        ]
    }
    const options = { 
        legend: { 
            display: false 
        }, 
        scale: {
            ticks: {
                suggestedMin: 10,
                suggestedMax: 70
            }
        }
    }
    return (
        <div className='chartPokemon'>
             <Radar data={radarData} options={options}/>
        </div>
    )
}
