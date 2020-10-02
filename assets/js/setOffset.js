import { urlGetKey } from "./urlHandler.js"

function setOffset(index) {
    if (urlGetKey("offset") == undefined) {
        index = 0;
    } else {
        index = urlGetKey("offset");
    }
    return index;
}

export default setOffset;