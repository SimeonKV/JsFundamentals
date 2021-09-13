function solve(number) {
let sum = 0;
let numberAsStr = number + '';

    for (let i = 0; i < numberAsStr.length; i++) {
        let digit = Number(numberAsStr.charAt(i));
        sum += digit;
    }

    console.log(sum);


}


solve(245678)