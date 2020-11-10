import React, {useState, useEffect } from "react";
import requests from "../../services/requests";

import './SearchBar.css'

export default function SearchBar(props) {
    // eslint-disable-next-line react/prop-types    
    const {updateList} = props;
    
    const [pokemonList, setPokemonList] = useState([]);

    const filterPokemonList = (word) =>{
        updateList( pokemonList.filter( pokemon => pokemon.name.includes(word) ))
    }

    // const filterPokemonByID = (word) =>{
    //     updateList( pokemonList.filter( pokemon => pokemon.name.includes(word) ))
    // }

    const getData = async () =>{
        let result =  await requests.fetchPokemonBySearch();        
        setPokemonList(result);
       
    }
    useEffect( async () =>{
        getData();
    },[])
    //INPUT
    const handleChange = async (e) => {
        let inputValue = e.target.value;
        if(inputValue.length === 0){
            updateList([]);
            return false;
        }
        if (e.key === "Enter" && inputValue.length > 0){ //The inputValue > 0 Is to allow when user try to find a pokemon by ID using 1 digist at least
            if( isNaN(inputValue) ){            
                if (inputValue.length > 2 ) {
                    filterPokemonList(inputValue)
                }
                
            }else{
                //Buscar por ID
                let result = await requests.fetchPokemonByID(inputValue)
                updateList([{name:result.name, url:`https://pokeapi.co/api/v2/pokemon/${result.id}`}]);
                                
            }
        } 
        return true;
        
    };

    return (
        <div className='searchBar'>
            <input onKeyUp={handleChange} className='searchBar__input'  placeholder='Search '/>
        </div>
    );
}
