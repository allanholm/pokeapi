import showPokemon from "./make-pokemon-list.js"

function fetchForList(index) {
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + index) 
        .then(response => response.json())
        .then(data => showPokemon(data));
}

export default fetchForList;