function solve(input) {
    let myArr = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let cmds = input[i].split(' ');

        let cmd = cmds[0];
        let element = cmds[1];

        switch (cmd) {
        
            case 'Add':
                myArr.push(element);
                break;
            case 'Remove':
             myArr =  myArr.filter(n => n !== element);
                break;
            case 'RemoveAt':
                myArr.splice(element,1);
                break;
            case 'Insert':
                let index = +cmds[2];
                myArr.splice(index,0,element);        
                break;
        }



    }


    console.log(myArr.join(' '));

}



solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);