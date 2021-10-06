function solve(train) {
    let wagons = train
        .shift()
        .split(' ')
        .map(element => Number(element));

    let maxCapacity = Number(train.shift());


    for (let wagon in train) {

        let cmds = train[wagon].split(' ');

        if (cmds[0] === 'Add') {
            let passengers = Number(cmds[1]);

            if (passengers <= maxCapacity) {
                wagons.push(passengers);
            }
        } else {
            let newPassengers = Number(cmds[0]);

            for (let index in wagons) {
                let totalPassengers = newPassengers + Number(wagons[index]);

                if (totalPassengers <= maxCapacity) {
                    wagons[index] = totalPassengers;
                    break;
                }

            }

        }

    }

    console.log(wagons.join(' '));

}



solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);