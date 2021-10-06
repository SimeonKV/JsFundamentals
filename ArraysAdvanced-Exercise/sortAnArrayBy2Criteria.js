function solve(arr) {
   
   arr =  arr.sort((a,b) => {
       let aLength = a.length;
       let bLength = b.length;

       let aToLowerCase = a.toLowerCase();
       let bToLowerCase = b.toLowerCase();

       if(aLength > bLength){
           return 1;
       }else if(aLength < bLength){
           return -1;
       }else{
           if(aToLowerCase > bToLowerCase){
               return 1
           }else if(aToLowerCase < bToLowerCase){
               return -1
           }else{
               return 0;
           }

       }


     


    })


    console.log(arr.join('\n'));
}


solve(['a','d','b']);

