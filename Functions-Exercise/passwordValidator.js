function solve(word) {

    let validator = (password) => {
        let boolLength = lengthValidator(password);
        let boolDigitsAndLetters = digitsLettersValidator(password);
        let boolTwoDigits = twoDigitsValidator(password);

        if(!boolLength){
            console.log('Password must be between 6 and 10 characters')
        }

        if(!boolDigitsAndLetters){
            console.log('Password must consist only of letters and digits')
        }

        if(!boolTwoDigits){
            console.log('Password must have at least 2 digits')
        }


        if(boolTwoDigits && boolDigitsAndLetters && boolLength){
            console.log('Password is valid')
        }

    }

    function twoDigitsValidator(passowrd) {
        let counter = 0;

        for (let i = 0; i < passowrd.length; i++) {

            if(passowrd.charAt(i).codePointAt(0) >= 48 && passowrd.charAt(i).codePointAt(0) <= 57 ){
                counter++;
            }

        }

        return counter >= 2;
    }

    function lengthValidator(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function digitsLettersValidator(passowrd) {

        for (let i = 0; i < passowrd.length; i++) {
            let charSymbol = passowrd.charAt(i);

            let smallLetter = isSmallLetter(charSymbol);
            let capitaLetter = isCapitalLetter(charSymbol);
            let digitLetter = isDigitLetter(charSymbol);

            let boolResult = smallLetter || capitaLetter || digitLetter;

            if(!boolResult){
                return false;
            }
        }


        return true;
    }


    function isDigitLetter(characher) {
        let charAsDigit = characher.codePointAt(0);

        return charAsDigit >= 48 && charAsDigit <= 57;

    }

    function isCapitalLetter(characher) {
        let charAsDigit = characher.codePointAt(0);

        return charAsDigit >= 65 && charAsDigit <= 90;
    }

    function isSmallLetter(characher) {
        let charAsDigit = characher.codePointAt(0);

        return charAsDigit >= 97 && charAsDigit <= 122

    }

    validator(word);

}

solve('Pa$s$s');