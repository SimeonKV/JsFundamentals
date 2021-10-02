function solve(number) {

    let load = (number) => {

        let outputString = loadingString(number);
        printOutput(number, outputString);



    }


    function printOutput(percent, str) {


        let output = percent >= 0 && percent < 100 ? `${percent}% [${str}]\nStill loading...` 
        :    `${percent}% Complete!\n[${str}]`;


        console.log(output);

    }


    function loadingString(number) {
        let returnValue = '';

        let numberAsStr = number.toString();
        let times = numberAsStr.length === 1 ? Number(numberAsStr)
                                             : Number(numberAsStr.slice(0,numberAsStr.length -1)); 

        let start = times + 1;

        while (times > 0) {
            returnValue += '%';
            times--;
        }

        for (let i = start; i <= 10; i++) {
            returnValue += ".";
        }


        return returnValue;
    }

    load(number);
}



solve(0);
