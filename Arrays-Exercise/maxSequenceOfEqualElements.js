function solve(arr) {
    let maxCounter = 0;
    let savedIndex = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let tempCounter = 1;
        let tempIndex = 0;

        if (arr[i] === arr[i + 1]) {
            tempIndex = i;
            
            while (true) {
                tempCounter++;
                i++;
                if (arr[i] !== arr[i + 1] || i == arr.length - 1) {
                    break;
                }
            }
        }

        if(tempCounter > maxCounter){
            maxCounter = tempCounter;
            savedIndex = tempIndex;

        }

    }

    if(maxCounter === 0){
        console.log(arr[0]);
        return;
    }

    let outputString = '';
    while(maxCounter > 0){
        outputString += arr[savedIndex] + ' ';
        maxCounter--;
    }

    console.log(outputString);

}

solve([2,1,1,2,3,3,2,2,2,1]);
solve([4,4,4,4]);
solve([1,2,3,4]);
