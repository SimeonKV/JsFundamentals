function solve(charOne, charTwo) {

    let charInRange = function (chOne, chTwo) {
        let first = chOne.codePointAt(0);
        let second = chTwo.codePointAt(0);

        let start = Math.min(first, second);
        let end = Math.max(first, second);

        let output = '';
        for (let i = start + 1; i < end; i++) {
            output += String.fromCharCode(i) + ' ';
        }

        console.log(output);

    }

charInRange(charOne,charTwo);

}


solve('a','h');