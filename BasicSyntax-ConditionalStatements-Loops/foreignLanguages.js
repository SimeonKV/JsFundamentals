function solve(language) {


    switch (language) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Mexico':
        case 'Argentina':
        case 'Spain':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;

    }


}


solve('England');
solve('Germany')