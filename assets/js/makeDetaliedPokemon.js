import CFletter from "./capitalize-first-letter.js";

function createPokemon(pokemon){
    const pokemonContainer = document.querySelector("#pokemonContainer");

    let pokemonName= document.createElement("h1");
    pokemonName.innerText = CFletter(pokemon.name);
    pokemonName.className = "pokemonContainer__pokemonName";

    let pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.sprites.front_default;
    pokemonImg.className = "pokemonContainer__pokemonImg";
    
    let pokemonTypes = document.createElement("div");

    let pokemonType = document.createElement("p");
    pokemonType.innerText = "Type: " + CFletter(pokemon.types[0].type.name);
    pokemonType.className = "pokemonContainer__pokemonType";
    pokemonTypes.append(pokemonType);

    if (pokemon.types.length > 1) {
        let pokemonType2 = document.createElement("p");
        pokemonType2.innerText = " / " + CFletter(pokemon.types[1].type.name);
        pokemonType2.className = "pokemonContainer__pokemonType";
        pokemonTypes.append(pokemonType2);
    }

    let pokemonAttack = document.createElement("div");

    let pokemonAttackName = document.createElement("h2");
    pokemonAttackName.innerText = CFletter(pokemon.abilities[0].ability.name) + ":";
    pokemonAttackName.className = "pokemonAttack__name";

    let pokemonAttackDesc = document.createElement("p");
    fetch('https://pokeapi.co/api/v2/ability/' + pokemon.abilities[0].ability.name)
    .then(response => response.json())
    .then(data => pokemonAttackDesc.innerText = data.effect_entries[1].effect);

    



    pokemonAttack.append(pokemonAttackName, pokemonAttackDesc);

    pokemonContainer.append(pokemonName, pokemonImg, pokemonTypes, pokemonAttack);
}

export default createPokemon;