function solve(arr){
let tempArr = [];




while(arr.length > 1){

    for(let i = 0;i < arr.length; i++){

        if(i === arr.length - 1){
            break;
        }

        let sum = arr[i] + arr[i + 1];

        tempArr.push(sum);
    }

    arr = tempArr;
    tempArr = [];


}


let result = arr.shift();
console.log(result);
}

solve([5,0,4,1,2]);