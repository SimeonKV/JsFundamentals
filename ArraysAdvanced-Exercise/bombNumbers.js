function solve(arr, arrTwo) {
    let specialNumber = arrTwo.shift();
    let range = arrTwo.shift();

    bombNumbers(arr, range, specialNumber);
    let sum = sumRemaingElements(arr);
    console.log(sum);

    function bombNumbers(arr, range, specialNumber) {
       
    while(true){
        
        let specialNumberIndex = arr.indexOf(specialNumber);

        if(specialNumberIndex === - 1){
            break;
        }

        let leftSideStartNumber = specialNumberIndex - range < 0 ? 0 : specialNumberIndex - range;
        arr.splice(leftSideStartNumber, range);

        specialNumberIndex = arr.indexOf(specialNumber);

        let rightSideStartNumber = specialNumberIndex + range > arr.length - 1 ? arr.length - 1 : specialNumberIndex + range;
        let deleteElements = Math.abs(rightSideStartNumber - specialNumberIndex);

        arr.splice(specialNumberIndex + 1, deleteElements);


        specialNumberIndex = arr.indexOf(specialNumber);
        
        arr.splice(specialNumberIndex,1);
    }

    }

    function sumRemaingElements(arr) {
        let res = arr.reduce((a,b) => a + b,0);

        return res;
    }


}


solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2,1]);