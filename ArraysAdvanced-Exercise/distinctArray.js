function solve(arr) {
    let index;
    let equal = false;


    for (let i = 0; i < arr.length;i++) {
       
        
        if (equal) {
            arr.splice(index, 1);
            i = 0;
        }
        equal = false;


        for (j = +i + 1; j < arr.length; j++) {

            if (arr[+i] === arr[j]) {
                index = j;
                equal = true;
                 break;
            }

        }


    }


    console.log(arr.join(' '));

}


solve([2, 2, 2]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);