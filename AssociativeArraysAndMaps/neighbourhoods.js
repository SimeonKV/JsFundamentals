function solve(arr) {
    let streets = arr.shift();
    let mapStreet = fillUpStreetInformation(streets);


    for (let i = 0; i < arr.length; i++) {
        let streetInforamtion = arr[i].split(' - ');
        let streetName = streetInforamtion[0];
        let resident = streetInforamtion[1];

        if(mapStreet.has(streetName)){
            let setOfStreets = mapStreet.get(streetName);
            setOfStreets.add(resident);

        }


    }

    printOutput(mapStreet);


   function printOutput(map){
       let allEntries = Array.from(map.entries());

      allEntries.sort((streetOne,streetTwo) => {
       let strOneResidents = streetOne[1].size;
       let strTwoResidents = streetTwo[1].size;

       return strTwoResidents - strOneResidents;

      })
      .forEach((streetInfo) =>{
         console.log(`${streetInfo[0]}: ${streetInfo[1].size}`)
         let residents = streetInfo[1];
         residents.forEach(resident => {
             console.log(`--${resident}`);
         });



      })


    }


    function fillUpStreetInformation(streets) {
        let input = streets.split(', ');
        let streetMap = new Map();

        input.forEach(element => {
            streetMap.set(element, new Set());
        });


        return streetMap;
    }



}


solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);