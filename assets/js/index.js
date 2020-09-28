fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0') 
    .then(response => response.json())
    .then(data => showPokemon(data));

const pokediv = document.querySelector("#pokemonList");

function showPokemon(pokedex) {
    console.log(pokedex.results);
    
    pokedex.results.forEach(pokemon => {

    let pokemonName = document.createElement("a");
    pokemonName.innerHTML = pokemon.name;
    pokemonName.href = "detailedView.html?id=" + pokemon.name;
    pokemonName.className = "pokemonList__listItem";

    pokediv.append(pokemonName);
});
}