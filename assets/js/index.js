import fetchForList from "./fetch-liste.js";
import knapFunktion from "./next-page-list.js";

let index = 0;

fetchForList(index);

let arrows = document.querySelectorAll("i");
arrows.forEach(arrow => arrow.addEventListener("click", function(e){
    let id = e.target.id;
    index = knapFunktion(id, index);
}));