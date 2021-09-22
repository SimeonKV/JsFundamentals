function solve(arr,numOfRotations){


    for(let i = 1; i <= numOfRotations;i++){
       let element = arr.shift();
       arr.push(element);
    }

    console.log(arr.join(' '));

}

solve([51,47,32,61,21],2);