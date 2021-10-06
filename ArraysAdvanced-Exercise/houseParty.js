function solve(listOfGuests) {
    let guests = [];

    for (let guest of listOfGuests) {
        let name = guest.split(' ')[0];


        if (guest.includes('not')) {

            if (guests.includes(name)) {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }

        } else {

            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`)
            }


        }

    }


    guests.forEach(element => {
        console.log(element);
    });



}


solve(['Tom is going!', 'Annie is going!','Tom is going!','Garry is going!','Jerry is going!']);