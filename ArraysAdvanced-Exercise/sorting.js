function solve(arr) {

    let resultArr = [];
    arr = arr.sort((a, b) => a - b);


    while (arr.length !== 0) {
        let bigNum = arr.pop();
        let smallNum = arr.shift();

        resultArr.push(bigNum);
        resultArr.push(smallNum);

    }


    console.log(resultArr.join(' '));

}


solve([1,  3, 52, 69, 63, 31,
    2, 18, 94]);