import fetchForList from "./fetch-liste.js";
import { setURL, urlGetKey } from "./urlHandler.js";

function knapFunktion(e) {

    let index =  parseInt(urlGetKey("offset"));

    if (e.target.id === "next") {
        if (index < 140) {
            index = index + 10;
        } else {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = 140;
        } else {
            index = index - 10;
        }
    }

    let newURL = "index.html?offset=" + index;
    setURL(newURL);

    fetchForList(urlGetKey("offset"));
    return index;
}

export default knapFunktion;