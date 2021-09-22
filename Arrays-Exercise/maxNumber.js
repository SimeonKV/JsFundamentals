function solve(arr) {
    let outputArray = [];



    for (const index in arr) {
        let element = arr[+index];

        if (+index === arr.length - 1) {
            outputArray.push(element);
            break;
        }

        let boolean = true;
        for (let i = +index + 1; i < arr.length; i++) {
            if (element <= arr[i]) {
                boolean = false;
                break;
            }
        }

        if (boolean === true) {
            outputArray.push(element);
        }


    }


console.log(outputArray.join(' '));

}


solve([1,4,3,2]);