function solve(number) {

    for (let i = 1; i <= number; i++) {
        let result = '';
        for (let j = 0; j < i; j++) {
            result += `${i} `
        }

        console.log(result);
    }
}

solve(57);