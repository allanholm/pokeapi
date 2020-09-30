import CFletter from "./capitalize-first-letter.js";

function createPokemon(pokemon){
    const pokemonContainer = document.querySelector("#pokemonContainer");

    let pokemonName= document.createElement("h1");
    pokemonName.innerText = CFletter(pokemon.name);
    pokemonName.className = "pokemonContainer__pokemonName";

    let pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.sprites.front_default;
    pokemonImg.className = "pokemonContainer__pokemonImg";
    
    let pokemonType = document.createElement("p");
    pokemonType.innerText = "Type: " + CFletter(pokemon.types[0].type.name);
    pokemonType.className = "pokemonContainer__pokemonType"

    pokemonContainer.append(pokemonName, pokemonImg, pokemonType);
}

export default createPokemon;