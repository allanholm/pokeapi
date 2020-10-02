import showPokemon from "./make-pokemon-list.js"

function fetchForList(index) {
    
    if (index > 140) {
        console.log("These pokemen are not regulation. Stop looking for them!");
    } else {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + index) 
        .then(response => response.json())
        .then(data => showPokemon(data));
    }
}

export default fetchForList;