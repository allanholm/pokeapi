function createPokemon(pokemon){
    const pokemonContainer = document.querySelector("#pokemonContainer");

    let pokemonName= document.createElement("h1");
    pokemonName.innerHTML = pokemon.name

    let pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.sprites.front_default; 
    
    let pokemonType = document.createElement("p");

    pokemonContainer.append(pokemonName, pokemonImg);
}

export default createPokemon;