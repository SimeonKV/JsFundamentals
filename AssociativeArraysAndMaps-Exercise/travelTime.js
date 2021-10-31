function solve(arr) {

    let countryCitiesTravelCosts = new Map();



    for (let i = 0; i < arr.length; i++) {
        let input = arr[i].split(' > ');
        let country = input[0];
        let city = input[1];
        let travelCost = input[2];

        if (!countryCitiesTravelCosts.has(country)) {
            countryCitiesTravelCosts.set(country, new Map());
        }


        countryCitiesTravelCosts.get(country)
            .set(city, travelCost);





    }



    let countryMapEntries = Array.from(countryCitiesTravelCosts.entries())
    countryMapEntries.sort((countryOne, countryTwo) => {
        let countryOneName = countryOne[0];
        let countryTwoName = countryTwo[0];
        return countryOneName.localeCompare(countryTwoName);

    }).forEach(country => {
        let output = country[0] + ' -> '

        let citiesAndTravelCostsEntries = Arrays.from(country[1].entries());
        citiesAndTravelCosts.sort((cityOne, cityTwo) => {
            let cityOneTravelCost = cityOne[1];
            let cityTwoTravelCost = cityTwo[1];

            return cityOneTravelCost - cityTwoTravelCost;
        }).forEach(city => console.log(`${output}`))


    });


}


solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);