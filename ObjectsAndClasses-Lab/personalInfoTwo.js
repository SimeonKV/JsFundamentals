function solve(firstName, lastName, age) {

    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

    }


    let person = new Person(firstName,lastName,age);

    for(let entry in person){
        console.log(`${entry}: ${person[entry]}`);

    }



}



solve('Petar','Pan','20')