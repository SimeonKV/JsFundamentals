function solve(numberOfPeople, type, dayOfWeek) {
    let total = 0;

    switch (dayOfWeek) {
        case 'Friday':
            switch (type) {
                case 'Sudents':
                    total = numberOfPeople * 8.45;
                    break;
                case 'Business':
                    total = numberOfPeople * 10.90;
                    break;
                case 'Regular':
                    total = numberOfPeople * 15;
                    break;
            }
            break;
        case 'Saturday':
            switch (type) {
                case 'Students':
                    total = numberOfPeople * 9.80;
                    break;
                case 'Business':
                    total = numberOfPeople * 15.60;
                    break;
                case 'Regular':
                    total = numberOfPeople * 20;
                    break;
            }
            break;
        case 'Sunday':
            switch (type) {
                case 'Students':
                    total = numberOfPeople * 10.46;
                    break;
                case 'Business':
                    total = numberOfPeople * 16;
                    break;
                case 'Regular':
                    total = numberOfPeople * 22.50;
                    break;
            }
            break;
    }


    if (type === 'Students' && numberOfPeople >= 30) {
        total = total * 0.85;
    }

    if (type === 'Business' && numberOfPeople >= 100) {

        let discount = 0;

        if (dayOfWeek === 'Friday') {
            discount = 10 * 10.90;
        } else if (dayOfWeek === 'Saturday') {
            discount = 10 * 15.60;
        } else if (dayOfWeek === 'Sunday') {
            discount = 10 * 16;

        }

        total = total - discount;

    }

    if(type === 'Regular' && (numberOfPeople >= 10 && numberOfPeople <= 20)){
        total = total * 0.95;
    }


    console.log(`Total price: ${total.toFixed(2)}`);

}

solve(30,'Students','Sunday');
solve(40,'Regular','Saturday')