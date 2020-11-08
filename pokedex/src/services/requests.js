import axios from './axios'

const requests = {
    fetchAllPokemons :  () => { 
        const result =  axios.get('/pokemon?offset=0&limit=18') 
        return result;
    },
    fetchOnePokemon: ()=>{ console.log('One Pokemon')} 
}

export default requests