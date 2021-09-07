function solve(start,end){
    let result = '';
    let sum = 0;

    for(let i = start; start <= end;start++ ){

        sum += start;
        result += `${start} `


    }

console.log(result);
console.log('Sum: ' + sum);

}

solve(5,10);