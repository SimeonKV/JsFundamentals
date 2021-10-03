function solve(k, n) {
    let arr = [];
    let counter = 0;

    while (counter < k) {


        let element = sumPreviousElements(arr,n);
        arr.push(element);



        counter++;
    }


    function sumPreviousElements(arr,n){
        let elementSum = 0;

        if(arr.length === 0){
            elementSum = 1;
        }else if(arr.length < n){
            elementSum = arr.slice(0).reduce((a,b) => a + b,0);
        }else{
            elementSum = arr.slice(arr.length - n).reduce((a,b) => a + b,0);
        }


        return elementSum;
    }

    console.log(arr.join(' '));

}

solve(8,2);