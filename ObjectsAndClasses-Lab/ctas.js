function solve(arrOfCats){

class Cat{

constructor(name,age){
    this.name = name;
    this.age = age;
    this.meow = () => console.log (`${this.name}, age ${this.age} says Meow`);
}


}

for(let i = 0; i < arrOfCats.length;i++){
 let cat = arrOfCats[i].split(' ');
 let nameOfCat = cat[0];
 let ageOfCat = Number(cat[1]);

 let catObj = new Cat(nameOfCat,ageOfCat);
 catObj.meow();

}



}


solve(['Mellow 2','Tom 5'])