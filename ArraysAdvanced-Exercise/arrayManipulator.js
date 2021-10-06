function solve(arr, operations) {

    for (let operation of operations) {
        let input = operation.split(' ');

        let cmd = input[0];

        switch (cmd) {
            case 'add':
                let index = parseInt(input[1]);
                let element = parseInt(input[2]);

                arr.splice(index, 0, element);
                break;
            case 'addMany':
                let indexTwo = parseInt(input[1]);
                let otherElements = fetchOtherElements(input);

                for (let i = otherElements.length - 1; i >= 0; i--) {
                    let elementOne = otherElements[i];
                    arr.splice(indexTwo, 0, elementOne);
                }
                break;
            case 'contains':
                let elementTwo = parseInt(input[1]);
                let res = isContained(elementTwo, arr);

                console.log(res);
                break;
            case 'remove':
                let indexThree = parseInt(input[1]);

                if (indexThree >= 0 && indexThree < arr.length) {
                    arr.splice(indexThree, 1);
                }
                break;
            case 'shift':
                let positions = parseInt(input[1]);

                while (positions > 0) {
                    let elementThree = arr.shift();
                    arr.push(elementThree);
                    positions--;
                }
                break;
            case 'sumPairs':
                arr = sumPair(arr);
                break;
            case 'print':
                console.log('[ '+ arr.join(', ') +' ]');
                break;

        }

    }


    


    function sumPair(array) {

        let res = [];

        if (arr.length % 2 === 0) {

            while (arr.length !== 0) {
                let firstNum = arr.shift();
                let secNum = arr.shift();

                let sum = firstNum + secNum;

                res.push(sum)
            }
        } else {

            while (arr.length !== 1) {
                let firstNum = arr.shift();
                let secNum = arr.shift();

                let sum = firstNum + secNum;

                res.push(sum)
            }


            res.push(arr.shift());
        }

        return res;
    }

    function fetchOtherElements(input) {
        let res = [];

        for (let i = 2; i < input.length; i++) {
            let element = parseInt(input[i]);
            res.push(element);

        }


        return res;
    }


    function isContained(element, array) {

        if (array.includes(element)) {
            return array.indexOf(element);
        }

        return -1;

    }
}

solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    );