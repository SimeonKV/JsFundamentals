function solve(name,lastName,hairColor){
let info = {
    name: name,
    lastName: lastName,
    hairColor: hairColor
}

const convertedToJason = JSON.stringify(info);
console.log(convertedToJason);
}


solve('George','Jones','Brown')