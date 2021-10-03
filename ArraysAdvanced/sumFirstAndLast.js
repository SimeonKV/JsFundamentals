function solve(stringArr){
let firstNumber = Number(stringArr.shift());
let lastNumber  = Number(stringArr.pop());

let result = firstNumber + lastNumber;


console.log(result);

}


solve(['40','30','20']);