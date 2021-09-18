function solve(arrOfNums) {
    let result = 0;

    for (const number of arrOfNums) {

        if (+number % 2 == 0) {
            result +=  +number;
        }

    }

    console.log(result);
}


solve(['1','2','3','4','5','6']);