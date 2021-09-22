function solve(arr) {

    if (arr.length === 1) {
        console.log(0);
        return;
    }

    let leftSum = 0;
    let rightSum = 0;
    let boolean = false;

    for (let index in arr) {

        for (let i = 0; i < +index; i++) {
            leftSum += arr[i];
        }

        for (let j = +index + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }


        if(leftSum === rightSum){
            console.log(index);
            boolean = true;
        }
        leftSum = 0;
        rightSum = 0;
    }


    if(boolean === false){
        console.log('no')
    }

}

solve([1,2,3,3])
solve([1,2])
solve([1])
solve([1,2,3])