function solve(name, area, population, country, postCode) {

    class City {

        constructor(name, area, population, country, postCode) {
            this.name = name;
            this.are = area;
            this.population = population;
            this.country = country;
            this.postCode = postCode;
        }

    }


    const city = new City("Sofia","240","1700000","Bulgaria","2800");
    let countryEntries = Object.entries(city);


    for(let entry in countryEntries){

        let entryKey = countryEntries[+entry][0];
        let entryValue = countryEntries[+entry][1];

        console.log(`${entryKey} -> ${entryValue}`)

    }


}

solve('Sandanski','123','23000','Bulgaria','2800')