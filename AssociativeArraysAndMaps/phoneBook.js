function solve(input) {
    let phoneBook = [];


    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(" ");
        let name = line[0];
        let phoneNumber = line[1];


        if (phoneBook.hasOwnProperty(name)) {
            phoneBook[name] = phoneNumber;
        } else {
            phoneBook[name] = phoneNumber;
        }

    }



    for(let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`)
    }


}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);