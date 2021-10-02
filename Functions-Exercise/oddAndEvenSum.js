function solve(num) {

    let sum = (number) => {
        let numAsStr = number.toString();
        let oddSum = 0;
        let evenSum = 0;

        for (let i = 0; i < numAsStr.length; i++) {

            let boolean = evenNumber(+numAsStr.charAt(i));

            if (boolean) {
                evenSum += Number(numAsStr.charAt(i));
            } else {
                oddSum += Number(numAsStr.charAt(i));

            }

        }


        return [oddSum,evenSum];
    }

    let evenNumber = (n) => n % 2 === 0;

    let arrOfSums = sum(num);
    console.log(`Odd sum = ${arrOfSums[0]}, Even sum = ${arrOfSums[1]}`);

}

solve(1236);