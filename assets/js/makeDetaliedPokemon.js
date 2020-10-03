import CFletter from "./capitalize-first-letter.js";

function createPokemon(pokemon){
    const pokemonContainer = document.querySelector("#pokemonContainer");

    let pokemonHeader = document.createElement("div");
    pokemonHeader.className = "pokemonContainer__header";

    let pokemonName= document.createElement("h1");
    pokemonName.innerText = CFletter(pokemon.name);
    pokemonName.className = "pokemonContainer__pokemonName";

    let pokemonHP = document.createElement("p");
    pokemonHP.innerText = pokemon.stats[0].base_stat + " HP";
    pokemonHP.className = "pokemonContainer__pokemonHP";

    pokemonHeader.append(pokemonName, pokemonHP);

    let pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.sprites.front_default;
    pokemonImg.className = "pokemonContainer__pokemonImg";
    
    let pokemonType = document.createElement("p");
    pokemonType.innerText = "Type: " + CFletter(pokemon.types[0].type.name);
    pokemonType.className = "pokemonContainer__pokemonType";

    if (pokemon.types.length > 1) {
        let pokemonType2 = " / " + CFletter(pokemon.types[1].type.name);
        pokemonType.append(pokemonType2);
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

    pokemonContainer.append(pokemonHeader, pokemonImg, pokemonType, pokemonAttack);
}

export default createPokemon;