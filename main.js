

// Almacenado de variables para ejecucion
const MIN_VALUE= 1;
const MAX_VALUE=1025;

const pokeForm = document.querySelector(".poke__form")
const pokeInput = document.querySelector(".poke__number")
const error = document.querySelector(".error__msg") 
const pokeCard = document.querySelector(".card__container")



// Funcion de mostrar error
const showError = (input, message) => {
    error.innerHTML = message
    pokeCard.innerHTML = ""
} 

const getPokemon = (pokeData) =>{
return{
    name: pokeData.name,
    weight: pokeData.weight,
    height: pokeData.height,
    img: pokeData.sprites.front_default,
    types: pokeData.types[0].type.name}

}


const createPokeCard = (pokeData) => {
     const {name, weight, height, img, types} = getPokemon(pokeData)
    return `<div class="card">
                    <div class="top">
                        <h2>${name}</h2>
                        <img src="${img}"  class="card__img" alt="${name}">
                    </div>
                    <div class="mid">
                        <h2>tipos:</h2>
                        <h2>${types}</h2>
                    </div>
                    <div class="bottom">
                        <div class="peso">
                            <p>Peso:</p>
                            <p>${weight/10}kg</p>
                        </div>
                        <div class="altura">
                            <p>altura:</p>
                            <p> ${height/10}m</p>
                        </div>
                    </div>
                </div>`
}

const renderPokeCard = (pokeData) =>{
    pokeCard.innerHTML = createPokeCard(pokeData)
    error.innerHTML = ""
}

// Funcion validadora multiple
const validateInput = (input, min, max) => {
    let isValid = true;

    // en caso de input vacio
    if(input === ""){
        showError(input, "Por favor ingrese un numero")
        isValid= false;
        return
    }

    // en caso de no colocar un number entre los parametros de min y max
    if(input < min || input > max ){
        showError(input, `debes ingresar un numero entre ${MIN_VALUE} y ${MAX_VALUE}`)
        isValid= false;
        return
    }
    return isValid;
}



const searchPokemon = async (e) => {
    e.preventDefault()
    const pokeValue = pokeInput.value

    if(validateInput(pokeValue, MIN_VALUE, MAX_VALUE)){
        const fetchedPokemon = await requestPokemon(pokeValue)
        console.log(fetchedPokemon);
        renderPokeCard(fetchedPokemon)
    }
    // if(invalidNumber(pokeValue, MIN_VALUE, MAX_VALUE)){ return}
   
}


const init = () => {
pokeForm.addEventListener("submit", searchPokemon)
}

init()