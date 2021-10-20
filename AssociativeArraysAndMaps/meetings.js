function solve(arr) {
    let schedule = new Map();


    for (let i = 0; i < arr.length; i++) {
        let input = arr[i].split(' ');
        let weekDay = input[0];
        let name = input[1];

        if (!schedule.has(weekDay)) {
            schedule.set(weekDay, name);
            console.log(`Scheduled for ${weekDay}`)
        } else {
            console.log(`Conflict on ${weekDay}!`)
        }


    }


Array.from(schedule).forEach((el) => console.log(`${el[0]} -> ${el[1]}`));
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);