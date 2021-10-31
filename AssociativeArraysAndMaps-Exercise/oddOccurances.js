function solve(stringOfWords) {
    let arrOfWords = stringOfWords.split(' ');
    let wordsAndTheirCount = new Map();


    for (let word of arrOfWords) {
        let wordCaseInsensitive = word.toLowerCase();

        if (!wordsAndTheirCount.has(wordCaseInsensitive)) {
            wordsAndTheirCount.set(wordCaseInsensitive, 0);
        } else {
            let count = wordsAndTheirCount.get(wordCaseInsensitive) + 1;
            wordsAndTheirCount.set(wordCaseInsensitive, count);
        }

    }

    let output = '';

    Array.from(wordsAndTheirCount.entries())
        .filter(wordAndCount => Number(wordAndCount[1]) % 2 === 0)
        .forEach((word) => output += word[0] + ' ');


  console.log(output);

}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');