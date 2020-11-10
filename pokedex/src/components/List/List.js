import React, {useState, useEffect} from 'react'

import ItemList from './ItemList/ItemList'
import requests from '../../services/requests';

import './List.css'

export default function List(props) {
    // eslint-disable-next-line react/prop-types
    const {pokemonsList, openModal} = props;
    
    const [List, setList] = useState([]);

    useEffect(  () =>{
        getPokemonInformation(pokemonsList)
    },[pokemonsList])

    const getPokemonInformation = async(pokemonArray) =>{
        let pokemonData = await Promise.all(pokemonArray.map( async (pokemon) =>{
            const result = await requests.fetchOnePokemon(pokemon.url);
            return result
        }))
        setList(pokemonData)
    }

    return (
        <div className="list">
            <div className="container"> 
                {   
                    List &&
                    List.map( (pokemon,index) => {
                        return <div key={index}className='list__item'>
                            <ItemList key={index} pokemon={pokemon} openModal={openModal} />
                        </div>
                    } )                    
                }           
            </div>
        </div>
    )
}
