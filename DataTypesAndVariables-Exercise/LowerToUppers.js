function solve(character) {
    let characterIntVal = character.charCodeAt(character);

    if (characterIntVal >= 65 && characterIntVal <= 90) {
        console.log('upper-case')
    } else if (characterIntVal >= 97 && characterIntVal <= 122) {
        console.log('lower-case')
    }
}


solve('A');
solve('e')