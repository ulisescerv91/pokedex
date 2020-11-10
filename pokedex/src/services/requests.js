import axios from 'axios'

const requests = {
    baseURL:'https://pokeapi.co/api/v2',
    fetchAllPokemons : async (num) => { 
        const result =  await axios.get(`${requests.baseURL}/pokemon?offset=${num}&limit=18`) 
        return result;
    },
    fetchOnePokemon: async(url)=>{
        const result =  await axios.get(`${url}`) 
        console.log(result.data)
        return result.data;
     },
     fetchPokemonBySearch:async () => { 
        const result =  await axios.get(`${requests.baseURL}/pokemon?offset=0&limit=1050`) 
        // console.log(result.data.results)
        return result.data.results;
    },
    fetchPokemonByID: async(id)=>{
        const result =  await axios.get(`${requests.baseURL}/pokemon/${id}`)         
        return result.data;
     },
}

export default requests