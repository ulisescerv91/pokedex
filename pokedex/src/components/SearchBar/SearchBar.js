import React, {useState, useEffect, Fragment } from "react";
import requests from "../../services/requests";

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
                console.log("buscar por id")
                let result = await requests.fetchPokemonByID(inputValue)
                console.log(result)
                updateList(result);
            }
        } 
        return true;
        
    };

    return (
        <Fragment>
            <input onKeyUp={handleChange} />
        </Fragment>
    );
}
