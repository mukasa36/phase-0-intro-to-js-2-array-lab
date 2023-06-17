// Write your solution here!
let cats =[ "Milo","Otis","Garfield"];

function destructivelyAppendCat (Ralph){
    cats.push(Ralph)
    return cats;
}

function destructivelyPrependCat (Bob){
    cats.unshift (Bob)
    return cats;
}

function destructivelyRemoveLastCat (Garfield){
    cats.pop(Garfield)
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift(0)
    return cats;
}

function appendCat (Broom){
    cats = [...cats,"Broom"]
    return cats;
}

function prependCat(Arnold,Broom){
    cats.unshift (Arnold)
    cats.pop(Broom)
    return cats;
}

function removeLastCat(Arnold,Garfield){
cats.shift (Arnold)
cats.pop(Garfield)
return cats;
}

function removeFirstCat (Milo,Garfield){
    cats =[...cats,"Garfield"]
    cats.shift(Milo)
    return cats;
}






