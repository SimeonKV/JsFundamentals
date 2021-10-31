function solve(arr) {

    let players = fillTheMap(arr);


    let playersAndTheirCards = Array.from(players.entries());


    for (let playerAndDeck of playersAndTheirCards) {

        let player = playerAndDeck[0];
        let deck = playerAndDeck[1];

        let calculatedDeckPoints = calculateDeck(deck);

        console.log(`${player}: ${calculatedDeckPoints}`);


    }


    function calculateDeck(deck) {
        let cardPowers = new Map();
        cardPowers.set('2', 2);
        cardPowers.set('3', 3);
        cardPowers.set('4', 4);
        cardPowers.set('5', 5);
        cardPowers.set('6', 6);
        cardPowers.set('7', 7);
        cardPowers.set('8', 8);
        cardPowers.set('9', 9);
        cardPowers.set('10', 10);
        cardPowers.set('J', 11);
        cardPowers.set('Q', 12);
        cardPowers.set('K', 13);
        cardPowers.set('A', 14);
        cardPowers.set('S', 4);
        cardPowers.set('H', 3);
        cardPowers.set('D', 2);
        cardPowers.set('C', 1);

        let result = 0;
        for (let card of deck) {
            let [partOneCard, partTwoCard] = separateCard(card);
            let currentResult = cardPowers.get(partOneCard.toString()) * cardPowers.get(partTwoCard.toString());

            result += currentResult;
        }



        return result;
    }

    function separateCard(card) {

        if (card.length === 3) {
            let partOne = card.substring(0, 2);
            let partTwo = card.substring(2, card.length);

            return [partOne, partTwo];
        } else {
            let partOne = card.substring(0, 1);
            let partTwo = card.substring(1, card.length);

            return [partOne, partTwo];
        }



    }

    function fillTheMap(arr) {
        let map = new Map();

        for (let i = 0; i < arr.length; i++) {
            let input = arr[i].split(': ');

            let playerName = input[0];
            let deck = new Set(input[1].split(', '));

            if (map.has(playerName)) {
                deck.forEach(card => map.get(playerName).add(card));
            } else {
                map.set(playerName, deck);
            }

        }


        return map;
    }

}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])