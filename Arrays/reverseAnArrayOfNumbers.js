function solve(index,arr){
let newArr = [];


    for(let i = 0; i < index; i++){
        newArr.push(arr[i]);
    }
    
 console.log(newArr.reverse().join(' '));   



}


solve(3,[10,20,30,40,50]);