function createPokemon(pokemon){
    const pokemonContainer = document.querySelector("#pokemonContainer");

    let pokemonName= document.createElement("h1");
    pokemonName.innerText = pokemon.name

    let pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.sprites.front_default; 
    
    let pokemonType = document.createElement("p");
    pokemonType.innerText = pokemon.types[0].type.name;

    pokemonContainer.append(pokemonName, pokemonImg, pokemonType);
}

export default createPokemon;