function solve(arr) {
    let items = arr.shift().split(' ');

    while (arr.length > 0) {
        let cmds = arr.shift().split(' ');

        switch (cmds[0]) {
            case 'Buy':
                if (!items.includes(cmds[1])) {
                    items.push(cmds[1]);
                }

                break;
            case 'Trash':
                if (items.includes(cmds[1])) {
                    let indexOfItem = items.indexOf(cmds[1]);
                    items.splice(indexOfItem, 1);
                }

                break;
            case 'Repair':
                if (items.includes(cmds[1])) {
                    let indexOfItemm = items.indexOf(cmds[1]);
                    let repairedItem = items.splice(indexOfItemm, 1);
                    items.push(repairedItem[0]);
                }

                break;

            case 'Upgrade':
                let itemToUpgrade = cmds[1].split('-');
                if (items.includes(itemToUpgrade[0])) {
                    let indexOfItemmm = items.indexOf(itemToUpgrade[0]);
                    items.splice(indexOfItemmm + 1, 0, cmds[1].replace('-', ':'))


                }
                break;
        }

    }


    console.log(items.join(' '));


}



solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);