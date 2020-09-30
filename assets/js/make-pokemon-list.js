import CFletter from "./capitalize-first-letter.js";

const pokediv = document.querySelector(".pokedex__list");

function showPokemon(pokedex) {
    pokediv.innerHTML = "";
    pokedex.results.forEach(pokemon => {

        let pokemonName = document.createElement("a");
        pokemonName.innerHTML = CFletter(pokemon.name);
        pokemonName.href = "detailedView.html?id=" +  pokemon.name;
        pokemonName.className = "pokemonList__listItem";

        pokediv.append(pokemonName);
});
}

export default showPokemon;