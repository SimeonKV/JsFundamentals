function solve(arr) {
    let password = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let passwordTry = arr[i];
        let reverseWord = reverseString(passwordTry);

        if (password === reverseWord) {
            console.log(`User ${password} logged in.`);
            return;
        } else {

            if (i === 4) {
                console.log(`User ${password} blocked!`);
                return;
            }

            console.log(`Incorrect password. Try again.`);

        }

    }


}

function reverseString(word) {
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) {
        result += word.charAt(i);

    }

    return result;
}


solve(['Acer', 'login', 'go', 'let me in', 'recA']);
solve(['momo', 'omom']);
solve([`sunny`, `rainy`, `cloudy`, `sunny`, `not sunny`]);