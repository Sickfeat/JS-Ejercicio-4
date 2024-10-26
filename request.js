const BASE_URL = " https://pokeapi.co/api/v2/pokemon"



const requestPokemon = async (id) => {
    try{
        const response = await fetch(
            `${BASE_URL}/${id}`
        )
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error(`hubo un error en la peticion ${error}`)
    }
}

