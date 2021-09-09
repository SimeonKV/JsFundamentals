function solve(number) {

    for (let i = 1; i <= number; i++) {

        let numAsStr = i + '';
        let lenOfNum = numAsStr.length;

        let sum = 0;
        for (let j = 0; j < lenOfNum; j++) {
            let digit = + numAsStr.charAt(j);
            sum += digit;
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }

    }

}

solve(15);