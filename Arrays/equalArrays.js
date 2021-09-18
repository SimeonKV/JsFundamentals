function solve(arrOne, arrTwo) {

    for (const index in arrOne) {

        if (arrOne[index] !== arrTwo[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        }

    }


    let result = 0;
    for (const element of arrOne) {
        let number = +element;
        result += number;
    }

    console.log(`Arrays are identical. Sum: ${result}`);
}


solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);