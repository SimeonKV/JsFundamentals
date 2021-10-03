function solve(arr){
let k = arr.shift();
let firstSequence = arr.slice(0,k);
let lastSequence = arr.slice(arr.length - k,arr.length);

console.log(firstSequence.join(' '));
console.log(lastSequence.join(' '));

}

solve([3,6,7,8,9]);