function solve(arrOne,arrTwo){

    for(let i = 0;i < arrOne.length; i++){
        if(i % 2 === 0){
            arrOne[i] = Number(arrOne[i]) + Number(arrTwo[i]);
        }else{
            arrOne[i] = arrOne[i] + arrTwo[i];
        }
    }


    console.log(arrOne.join('-'));


}

solve(['5','15','23','56','35'],['17','22','87','36','11']);