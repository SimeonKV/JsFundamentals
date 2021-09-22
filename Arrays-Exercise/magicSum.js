function solve(arr, number) {


    for (const index in arr) {
        let element = arr[+index];

        for (let i = +index + 1; i < arr.length; i++) {
            let anotherElement = arr[i];

            if (element + anotherElement === number) {
                console.log(`${element} ${anotherElement}`);
            }

        }

    }

}

solve([1,7,6,2,19,23],8)