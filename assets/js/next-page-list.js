import fetchForList from "./fetch-liste.js";

function knapFunktion(id, index) {
    if (id === "next") {
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
    console.log(index);
    fetchForList(index);
    return index;
}

export default knapFunktion;