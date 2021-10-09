function solve(c, a, p, c, pos) {

    let countryObj = {
        city: c,
        area: a,
        population: p,
        country: c,
        postcode: pos
    }


    const {city,area,population,country,postcode} = countryObj;

    console.log(`name -> ${city}\narea -> ${area}\npopulation -> ${population}\ncountry -> ${country}\npostCode -> ${postcode}`);



}


solve("Sofia","492","1238438","Bulgaria","1000")