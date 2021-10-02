function solve(number) {


    for (let i = 0; i < number; i++) {

        let res = printRow(number);

        console.log(res);

    }


    function printRow(number) {
        let output = '';
        let times = number;
        while (times > 0){

            output += number + ' ';

            times--;

        }

        return output;

    }



}


solve(10);