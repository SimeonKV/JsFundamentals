function solve(number) {

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {
            for (let k = 1; k <= number; k++) {

                console.log(String.fromCharCode(96 + i) + '' + String.fromCharCode(96 + j)
                + ' ' + String.fromCharCode(96 + k));



            }
        }
    }


}

solve(3);