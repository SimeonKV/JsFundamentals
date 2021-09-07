function solve(goldInGrams){
    let totalGoldInLeva = 0;
    let bitcoin = 11949.16;
    let bitcoinsBought = 0;
    let dayFirstBitcoinBought = null;
    
    
    for (let i = 0;i < goldInGrams.length;i++){
        let goldInLeva = goldInGrams[i] * 67.51;
    
        if((i + 1) % 3 === 0){
            goldInLeva *= 0.7;
        }
    
        totalGoldInLeva += goldInLeva;
    
        while(totalGoldInLeva >= bitcoin){
            totalGoldInLeva -= bitcoin;
            bitcoinsBought++;
            if(dayFirstBitcoinBought == null){
                dayFirstBitcoinBought = i + 1;
            }
        }
    
    }
    
    console.log(`Bought bitcoins: ` + bitcoinsBought);
    
    if(dayFirstBitcoinBought != null){
    console.log("Day of the first purchased bitcoin: " + dayFirstBitcoinBought);
    }
    
    console.log(`Left money: ${totalGoldInLeva.toFixed(2)} lv.`);
    }