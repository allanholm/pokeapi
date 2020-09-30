import fetchForList from "./fetch-liste.js";
import knapFunktion from "./next-page-list.js";
import { urlGetKey } from "./urlHandler.js";

let index = 0;
const url = new URL("http://index.html");

url.searchParams.set("offset", index);
url.searchParams.set("page_type", "list");

fetchForList(urlGetKey("offset"));

let arrows = document.querySelectorAll("i");
arrows.forEach(arrow => arrow.addEventListener("click", knapFunktion));