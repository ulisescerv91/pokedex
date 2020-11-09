import React, {useState, useEffect} from 'react'

import ItemList from './ItemList/ItemList'

import requests from '../../services/requests';

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
        <div className="List">
                {   
                    List &&
                        List.map( (pokemon,index) =><ItemList key={index} pokemon={pokemon} openModal={openModal}/>)                    
                }           
        </div>
    )
}
