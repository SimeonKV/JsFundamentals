function solve(string, number) {

    let orderPrice = (product, quantity) => {
        let total = 0;
        if (product === 'water') {

            total = quantity * 1.00;
        } else if (product === 'coffee') {
            total = quantity * 1.50;
        } else if (product === 'coke') {
            total = quantity * 1.40;
        } else if (product === 'snacks') {
            total = quantity * 2.00;
        }

        return total;

    }


console.log(orderPrice(string,number).toFixed(2));

}


solve('water',5);