// function repeatWord(word, time) {
//     let output = '';

//     while (time > 0) {
//         output += word;

//         time--;
//     }
//     console.log(output);

// }

// repeatWord('abc', 3)



// function repeatWord(word, times) {

//     let res = function (aWord, time) {
//         let output = '';


//         while (time > 0) {
//             output += aWord;

//             time--;
//         }



//         return output;
//     }


// console.log(res(word,times));

// }


// repeatWord('abc',3);



function repeatString(str, times) {

    let repeatWord = (word, time) => {
        let output = '';

        while (time > 0) {
            output += word;

            time--;
        }

        console.log(output);
    }

    repeatWord(str,times);

}

repeatString('abc',3)