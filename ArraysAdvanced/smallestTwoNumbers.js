function solve(arr){
console.log(arr.sort((a,b) => a - b).slice(0,2).join(' '));
}


solve([55,66,3,10,2]);