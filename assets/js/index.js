import fetchForList from "./fetch-liste.js";
import knapFunktion from "./next-page-list.js";
import setOffset from "./setOffset.js";
import { setURL, urlGetKey } from "./urlHandler.js";

let index;

let newURL = "index.html?offset=" + setOffset(index);
setURL(newURL);

fetchForList(urlGetKey("offset"));

let arrows = document.querySelectorAll("i");
arrows.forEach(arrow => arrow.addEventListener("click", knapFunktion));