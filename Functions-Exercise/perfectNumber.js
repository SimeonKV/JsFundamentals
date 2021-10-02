function solve(number) {


    let perfectNumber = function (number) {
        let perfectNumbers = fillArrayWithPefectNumbers(number);
        let sumOfPerfectNumbers = sum(perfectNumbers);

        if (sumOfPerfectNumbers === number) {
            console.log('We have a perfect number!')
        } else {
            console.log(`It's not so perfect.`)
        }


    }



    function fillArrayWithPefectNumbers(number) {
        let perfectNumbers = [];

        for (let i = 1; i < number; i++) {

            if (number % i === 0) {
                perfectNumbers.push(i);
            }

        }

        return perfectNumbers;
    }


    function sum(arrOfNumbers) {

        let endSum = arrOfNumbers.reduce((previousNumber, currentValue) => { return previousNumber + currentValue},0);

        return endSum;
    }


perfectNumber(number);

}

solve(6);
solve(28)