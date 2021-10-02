function solve(numberOne, numberTwo) {

    let numOneFactorial = findFactorial(numberOne);
    let numTwoFactorial = findFactorial(numberTwo);


    let result = numOneFactorial / numTwoFactorial;
    console.log(result.toFixed(2));

    function findFactorial(number) {
        let result = 1;

        for (let i = 1; i <= number; i++) {
            result *= i;
        }

        return result;

    }



}


solve(5,2);