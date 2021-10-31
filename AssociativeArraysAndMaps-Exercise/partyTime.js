function solve(arr) {
    let partyIndex = findPartyIndex(arr);
    let invitedGuests = arr.slice(0, partyIndex);
    let guestsThatCame = arr.slice(partyIndex + 1, arr.length);


    let mapOfInvitedGuests = fillTheMapOfGuests(invitedGuests);

    for (let i = 0; i < guestsThatCame.length; i++) {
        let guestName = guestsThatCame[i];

      
        mapOfInvitedGuests = correctListOfGuests(mapOfInvitedGuests,guestName);

    }

    printGuestsNotCome(mapOfInvitedGuests);



   function printGuestsNotCome(mapOfInvitedGuests){
       let vipGuestsSize = mapOfInvitedGuests.get('VIP').size;
       let regularGuestsSize = mapOfInvitedGuests.get('REGULAR').size;

       let totalSize = vipGuestsSize + regularGuestsSize;

       console.log(`${totalSize}`);

       let vipGuests = mapOfInvitedGuests.get('VIP');
       for(let vipGuest of vipGuests){
           console.log(vipGuest);
       }


       
       let regularGuests = mapOfInvitedGuests.get('REGULAR');
       for(let regularGuest of regularGuests){
           console.log(regularGuest);
       }




   }

   
    function correctListOfGuests(map,guestName){
        
       if(checkVIP(guestName)){
           let vipGuests = map.get('VIP');

           if(vipGuests.has(guestName)){
               vipGuests.delete(guestName);
           }

       }else{
           let regularGuests = map.get('REGULAR');
           
           if(regularGuests.has(guestName)){
               regularGuests.delete(guestName);
           }

       }


       return map;
    }

    function fillTheMapOfGuests(arrOfNames) {
        let map = new Map();
        map.set('VIP', new Set());
        map.set('REGULAR', new Set());


        for (let i = 0; i < arrOfNames.length; i++) {
            let name = arrOfNames[i];

            if (checkVIP(name)) {

                map.get('VIP').add(name);

            } else {

                map.get('REGULAR').add(name);

            }
        }

        return map;
    }

    function checkVIP(stringName) {
        if (stringName.startsWith('0') || stringName.startsWith('1') || stringName.startsWith('2') || stringName.startsWith('3') || stringName.startsWith('4') || stringName.startsWith('5') || stringName.startsWith('6') || stringName.startsWith('7') || stringName.startsWith('8') || stringName.startsWith('9')) {
            return true;
        }

        return false;


    }

    function findPartyIndex(arr) {
        let index = -1;
        if (arr.includes('PARTY')) {
            index = arr.indexOf('PARTY')
        }


        return index;
    }
}

solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);