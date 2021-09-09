function solve(century){
let years = century * 100;
let days = century * 36524;
let hours = century * 876576;
let mins = century * 52594560;

console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`);

}

solve(5);