function solve(arr) {
    let addresses = new Map();

    for (let i = 0; i < arr.length; i++) {
        let input = arr[i].split(':');
        let name = input[0];
        let address = input[1];

        addresses.set(name, address);
    }

    let arrOfaddresses = Array.from(addresses.entries());
    arrOfaddresses
        .sort((addressOne, addressTwo) => addressOne[0].localeCompare(addressTwo[0]))
        .forEach((address) => {
            console.log(`${address[0]} -> ${address[1]}`);
        });

}


solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);