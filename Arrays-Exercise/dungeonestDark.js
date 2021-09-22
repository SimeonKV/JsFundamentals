function solve(arr) {
    let input = arr.join('');
    let game = input.split('|');
    let health = 100;
    let coins = 0;;
    let room = 0;


    for (const element of game) {
        let arguments = element.split(' ');

        let word = arguments[0];
        let points = Number(arguments[1]);

        if (word === 'potion') {
            room++;

            if (health < 100) {
                let neededHealth = 100 - health;

                if (neededHealth < points) {
                    health += neededHealth;
                    console.log(`You healed for ${neededHealth} hp.`);
                } else {
                    health += points;
                    console.log(`You healed for ${points} hp.`);
                }
            } else {
                console.log(`You healed for 0 hp.`);
            }

            console.log(`Current health: ${health} hp.`)

        } else if (word === 'chest') {
            room++;
            coins += points;
            console.log(`You found ${points} coins.`)

        } else {
            room++;
            health -= points;


            if (health <= 0) {
                console.log(`You died! Killed by ${word}.`);
                console.log(`Best room: ${room}`);
                return;
            } else {
                console.log(`You slayed ${word}.`)
            }

        }

    }


    console.log(`You've made it! `);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`)



}



solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
