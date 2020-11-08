import axios from 'axios'

const requests = {
    baseURL:'https://pokeapi.co/api/v2',
    fetchAllPokemons : async () => { 
        const result =  await axios.get(`${requests.baseURL}/pokemon?offset=0&limit=18`) 
        return result;
    },
    fetchOnePokemon: async(url)=>{
        const result =  await axios.get(`${url}`) 
        return result.data;
     } 
}

export default requests