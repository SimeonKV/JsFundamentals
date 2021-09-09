function solve(number){
let numberAsString = number.toString();
let sumOfDigits = 0;

for(let i = 0; i < numberAsString.length; i++){
let num = numberAsString.charAt(i);
sumOfDigits += +num;
}

let sumfOfDigitsAsStr = sumOfDigits + '';
let res = sumfOfDigitsAsStr.includes('9') ? 'True' : 'False';


console.log(number + ' Amazing? ' + res)



}


solve(1233);