function solve(arr) {
    let words = arr.shift().split(' ');

    let searchedWords = new Map();
    searchedWords.set(words[0], 0);
    searchedWords.set(words[1], 0);


    arr.forEach(element => {

        if (searchedWords.has(element)) {
            let wordCount = searchedWords.get(element) + 1;
            searchedWords.set(element, wordCount);
        }

    });


    Array.from(searchedWords.entries())
        .sort((wordOne,wordTwo) => {
              return wordTwo[1] - wordOne[1];
        })
        .forEach((word) => console.log(`${word[0]} - ${word[1]}`))

}

solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    );