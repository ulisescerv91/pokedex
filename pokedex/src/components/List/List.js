import React, {useState , useEffect} from 'react'

import ItemList from './ItemList/ItemList'

import request from '../../services/requests'

export default function List() {
    const [pokemonsList, setPokemonsList] = useState([]);

    useEffect(  () =>{
        async function getData(){
            let result =  await request.fetchAllPokemons();
            await getPokemonInformation(result.data.results)
        }
        getData()
    },[])

    const getPokemonInformation = async(pokemonArray) =>{
        let pokemonData = await Promise.all(pokemonArray.map( async (pokemon) =>{
            const data = await fetch(pokemon.url);
            const result = await  data.json()
            console.log(result)
            return result
        }))
        console.log(pokemonData)
        setPokemonsList(pokemonData)
        
        
    }

    return (
        <div className="List">
                {   
                    pokemonsList &&
                        pokemonsList.map( (pokemon,index) =><ItemList key={index} imagen={pokemon.sprites.front_default} name={pokemon.name}/>)
                    
                }           
        </div>
    )
}
