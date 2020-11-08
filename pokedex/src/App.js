import React, {useState, useEffect,Fragment } from 'react'
import "./App.css";
//Components
import Title from './components/Title/Title'
import List from './components/List/List'
import SearchBar from './components/SearchBar/SearchBar'

import requests from './services/requests';


function App() {

  const [pokemonsListOriginal, setPokemonsListOriginal] = useState([]);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [searchValue, setSearchValue] = useState(''); 



  const getData = async () =>{
      let result =  await requests.fetchAllPokemons();
      setPokemonsListOriginal(result.data.results);
      setPokemonsList(result.data.results)
      return true;
  }

  const filterPokemonList = (word) =>{
      setPokemonsList( pokemonsListOriginal.filter( pokemon => pokemon.name.includes(word) ))
  } 

  useEffect(  () =>{
      getData()
  },[])

  //INPUT
  const handleChange = (e) => {
    let inputValue = e.target.value
    if(inputValue.length > 2){        
        setSearchValue(inputValue)
        filterPokemonList(inputValue)
    }else{
      setSearchValue('')
      setPokemonsList(pokemonsListOriginal)
    }
    return true
}

  return <div className="App">
    
      <Fragment>
            <Title/>
            <h1>{searchValue}</h1>
            <SearchBar   change={handleChange}/>
            {
               <List pokemonsList={pokemonsList} /> 
              
              }
      </Fragment>
  
  </div>;
}

export default App;
