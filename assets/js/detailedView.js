import {  urlGetKey } from "./urlHandler.js";
import createPokemon from "./makeDetaliedPokemon.js";

fetch('https://pokeapi.co/api/v2/pokemon/' + urlGetKey("id")) 
    .then(response => response.json())
    .then(data => createPokemon(data));
