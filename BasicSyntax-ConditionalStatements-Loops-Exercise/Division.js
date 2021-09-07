function solve(number) {

    if (number % 10 === 0) {
        console.log('The number is divisible by 10');
        return;
    }


    if(number % 7 === 0){
        console.log('The number is divisible by 7');
        return;
    }

    if(number % 6 === 0){
        console.log('Then number is divisible by 6');
        return;
    }

    if(number % 3 === 0){
        console.log('The number is divisible by 3');
        return;
    }

    if(number % 2 === 0){
        console.log('The number is divisible by 2');
        return;
    }

    console.log('Not divisible')

}


solve(30);
solve(15);
solve(1643);
