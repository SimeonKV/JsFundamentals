function solve(arr) {
    let sumFromOriginalArr = 0;
    let sumFromModifiedArr = 0;

    for (let index in arr) {
        let element = arr[index];

        sumFromOriginalArr += element;

        if (element % 2 === 0) {
            arr[index] = element + +index;
            sumFromModifiedArr += arr[index];
        } else {
            arr[index] = element - +index;
            sumFromModifiedArr += arr[index];
        }

    }


    console.log(arr);
    console.log(sumFromOriginalArr);
    console.log(sumFromModifiedArr);
}


solve([5,15,23,56,35]);