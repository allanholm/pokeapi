import fetchForList from "./fetch-liste.js";
import knapFunktion from "./next-page-list.js";
import { setURL, urlGetKey } from "./urlHandler.js";

let index = 0;

let newURL = "index.html?offset=" + index;
setURL(newURL);

fetchForList(urlGetKey("offset"));

let arrows = document.querySelectorAll("i");
arrows.forEach(arrow => arrow.addEventListener("click", knapFunktion));