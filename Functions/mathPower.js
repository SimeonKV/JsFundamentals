// function solve(n,p){

// let mathPower = function(number,power){
//     let res = number;

//     while(power > 1){
//         let currRes = res * number;
//         res = currRes;
//         power --;
//     }

//     return res;

// }

// console.log(mathPower(n,p));

// }


// solve(3,4);


function solve(n,p){


let mathPower = (number,power) => {
    let res = number;

        while(power > 1){
             let currRes = res * number;
             res = currRes;
             power --;
         }
    
         return res;
}

console.log(mathPower(n,p));

}

solve(3,4);