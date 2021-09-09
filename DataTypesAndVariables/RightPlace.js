function solve(fisrtWord,replacementChar,secondWord){
let modifiedFirstWord = fisrtWord.replace('_',replacementChar);

let result = modifiedFirstWord === secondWord ? 'Matched' : 'Not Matched';
console.log(result);


}

solve('S_ring','t','String');