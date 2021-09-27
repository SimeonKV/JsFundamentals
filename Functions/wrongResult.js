function solve(numOne,numTwo,numThree){
let negativeNuberCounter = 0;

let arr = [numOne,numTwo,numThree];

for(let i = 0; i < arr.length; i++){

    if(arr[i] < 0){
        negativeNuberCounter++;
    }
}

let res = negativeNuberCounter % 2 === 0 ? 'Positive' : 'Negative';
console.log(res);
}


solve(-3,-3,-3);
solve(1,2,3);
solve(-1,2,-2);