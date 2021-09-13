function solve(firstNum,operator,secondNum){

    switch(operator){
        case'+':
        let resPlus = firstNum + secondNum;
        return console.log(resPlus.toFixed(2));
        case'-':
        let resMinus = firstNum - secondNum;
        return console.log(resMinus.toFixed(2));
        case'*':
        let resMultiplication = firstNum * secondNum;
        return console.log(resMultiplication.toFixed(2));
        case'/':
        let resDivision = firstNum / secondNum;
        return console.log(resDivision.toFixed(2));
    }


}


solve(2,'-',2);