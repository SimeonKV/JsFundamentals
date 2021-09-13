function solve(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let totalExpenses = 0;

    for(let i = 1; i <= lostFightsCount; i++){

        if(i % 2 === 0){
            totalExpenses += helmetPrice;
        }

        if(i % 3 === 0){
            totalExpenses += swordPrice;
        }


        if(i % 2 === 0 && i % 3 === 0){
            totalExpenses += shieldPrice;
        }

        if(i % 12 === 0){
            totalExpenses += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}


solve(23,12.50,21.50,40,200);