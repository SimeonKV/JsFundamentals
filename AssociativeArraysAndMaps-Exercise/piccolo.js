function solve(arr) {
    let parkingLot = new Set();


    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(', ');
        let cmd = tokens[0];
        let carNumber = tokens[1];

        if(cmd === 'IN'){
            parkingLot.add(carNumber);
        }else if(cmd === 'OUT'){
            if(parkingLot.has(carNumber)){
                parkingLot.delete(carNumber);
            }
        }

    }

    if(parkingLot.size === 0){
        console.log("Parking Lot is Empty")
    }
    
    Array.from(parkingLot
    .values())
    .sort((carOne,carTwo) => carOne.localeCompare(carTwo))
    .forEach((car) => console.log(car));


}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);