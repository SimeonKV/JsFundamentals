function solve(arrOne, arrTwo) {
    let numbersToTake = arrTwo.shift();
    let numbersToDelete = arrTwo.shift();
    let numberToLookFor = arrTwo.shift();


    arrOne = arrOne.slice(0, numbersToTake);
    arrOne.splice(0, numbersToDelete);
    let res = arrOne.filter(element => element === numberToLookFor)
        .reduce((a, b) => {
            b = 1;
           return a + b
        }, 0)


        console.log(`Number ${numberToLookFor} occurs ${res} times.`);



}



solve([5, 2, 3, 4, 1, 6], [5, 2, 3])