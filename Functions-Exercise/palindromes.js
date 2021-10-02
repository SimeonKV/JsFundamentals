function solve(arr){

    for(let number of arr){

        let boolean = palindrome(number);
        console.log(boolean);

    }


   function  palindrome(number){
       let numberAsStr = number.toString();
       let numberInReverse = '';

       for(let i = numberAsStr.length - 1; i >= 0;i--){
           numberInReverse += numberAsStr.charAt(i);
       }

       
       return number === Number(numberInReverse);
   }



}

solve([123,323,421,121]);