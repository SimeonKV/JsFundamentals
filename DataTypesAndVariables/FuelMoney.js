function solve(distance,passengers,price1L){
let fuelMoney = ((distance / 100) * 7) * price1L;
let extraFuelMoney = (passengers * 0.1) * price1L; 
let total = fuelMoney + extraFuelMoney;

console.log(`Needed money for that trip is ${total.toFixed(3)} lv.`);


}

solve(90,14,2.88);