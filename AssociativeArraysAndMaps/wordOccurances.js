function solve(arrOfWords) {
    let dictionary = new Map();

    for (let i = 0; i < arrOfWords.length; i++) {
        let word = arrOfWords[i];

        if (dictionary.has(word)) {
            let previosCount = dictionary.get(word);
            let newCount = previosCount + 1;
            dictionary.set(word, newCount);
        } else {
            dictionary.set(word, 1);
        }

    }

    let dictionaryAsArr = Array.from(dictionary.entries())
    .sort((wordOne,wordTwo) => {
        let wordOneOccurances = wordOne[1];
        let wordTwoOccurances = wordTwo[1];

        return wordTwoOccurances - wordOneOccurances;
    })
    .forEach((word) => console.log(`${word[0]} -> ${word[1]} times`));


}



solve(['Here', 'is', 'the', 'first', 'sentence']);
   