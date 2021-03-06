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


    const getData = async () =>{
        let result =  await requests.fetchPokemonBySearch();        
        setPokemonList(result);
       
    }
    useEffect( async () =>{
        getData();
    },[])
    //INPUT
    const handleChange = async (e) => {
        let inputValue =(e.target.value).toLowerCase();
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
            <i className='icon'>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
            </i>
            <input onKeyUp={handleChange} className='searchBar__input'  placeholder='Search By Keywords...'/>
        </div>
    );
}
