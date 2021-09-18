function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;


    for (const element of arr) {
        let number = Number(element);

        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }

    let result = sumEven - sumOdd;
    console.log(result);

}

solve(['1','2','3','4','5','6']);