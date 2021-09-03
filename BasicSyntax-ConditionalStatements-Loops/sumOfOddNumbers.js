function solve(number) {
    let result = 0;
    let digit = 1;

    while (number > 0) {
       


        if (digit % 2 !== 0) {
            console.log(digit);
            result += digit;
            digit++;
        } else {
            digit++;
            continue;
        }

        
        number--;
    }

    console.log('Sum: ' + result);
}

solve(5);