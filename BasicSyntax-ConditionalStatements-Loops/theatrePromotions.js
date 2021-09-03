function solve(dayOfWeek, age) {
    if(age < 0){
        console.log('Error!');
        return;
    }
    
    switch (dayOfWeek) {
        case'Weekday':
        if(age >= 0 && age <=18){
            console.log('12$');
        }else if(age > 18 && age <= 64){
            console.log('18$');
        }else{
            console.log('12$')
        }
        break;
        case'Weekend':
        if(age >= 0 && age <= 18){
            console.log('15$')
        }else if(age > 18 && age <= 64){
            console.log('20$')
        }else{
            console.log('15$')
        }
        break;
        case'Holiday':
        if(age >= 0 && age <= 18){
            console.log('5$')
        }else if(age > 18 && age <= 64){
            console.log('12$')
        }else{
            console.log('10$')
        }
        break;
        default:
            console.log('Error!');
            break;

    }



}



solve('Weekday',-12)