function solve(numOne, numTwo, str) {


    let res = function (nOne, nTwo, operation) {
        switch (operation) {
            case 'multiply':
                return nOne * nTwo;
            case 'divide':
                return nOne / nTwo;
            case 'add':
                return nTwo + nOne;
            case 'subtract':
                return nOne - nTwo;
        }
    }

console.log(res(numOne,numTwo,str));
}


solve(2,2,'add');