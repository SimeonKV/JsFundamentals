function solve(arr) {
    let resultArr = [];

    arr.forEach((number, index) => {

        if (index % 2 !== 0) {
            resultArr.unshift(number * 2)
        }

    });

    console.log(resultArr.join(' '));

}


solve([10,15,20,25])