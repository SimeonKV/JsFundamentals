function solve(stringArr){
let resultArr = [];


for(let element of stringArr){

if(+element < 0){
    resultArr.unshift(+element);
}else{
    resultArr.push(+element);
}

}

resultArr.forEach((element) => console.log(element))


}

solve(['3','-2','0','-1'])