function solve(input) {
    let store = new Map();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let product = tokens[0];
        let amount = Number(tokens[1]);


        if (store.has(product)) {
            store.set(product,store.get(product) + amount);
        } else {
            store.set(product,amount);
        }

    }


    let storeEntries = Array.from(store.entries());
    storeEntries.forEach(value => console.log(`${value[0]} -> ${value[1]}`));

}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);