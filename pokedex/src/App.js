import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
//Components
import Title from "./components/Title/Title";
import List from "./components/List/List";
import SearchBar from "./components/SearchBar/SearchBar";
import Modal from "./components/Modal/Modal";
import Pagination from "./components/Pagination/Pagination";

import requests from "./services/requests";

function App() {
  const [pokemonsListOriginal, setPokemonsListOriginal] = useState([]);
  const [pokemonsList, setPokemonsList] = useState([]);
  const itemsByPage = 18;
  const totalItemsToPagination = 1050;
  const [offset,setOffset] = useState(0)

  const modalRef = React.useRef(); //Modal

  const getData = async () => {
    let result = await requests.fetchAllPokemons(offset);
    setPokemonsListOriginal(result.data.results);
    setPokemonsList(result.data.results);
    return true;
  };

  const updateListBySearch = (list) => {
    console.log("list", list);
    if (list.length === 0) {
      console.log("Pokemon sin coincidencias");
      setPokemonsList(pokemonsListOriginal);
    } else {
      setPokemonsList(list);
    }
  };

  const openModal = (pokemon) => {
    modalRef.current.openModal(pokemon);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className="App">
      <Fragment>
        <Modal ref={modalRef} />
        <Title />
        <SearchBar updateList={updateListBySearch} />
        <List pokemonsList={pokemonsList} openModal={openModal} />
        <Pagination itemsByPage={itemsByPage} totalItems={totalItemsToPagination} offset={setOffset}/>
      </Fragment>
    </div>
  );
}

export default App;
