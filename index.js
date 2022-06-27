// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}

function prependCat(name) {
    const coolCats = [...cats];
    coolCats.unshift(name);
    return coolCats;
}

function removeLastCat() {
    const goodCats = [...cats];
    goodCats.pop();
    return goodCats;
}

function removeFirstCat() {
    const badCats = [...cats];
    badCats.shift();
    return badCats;
}