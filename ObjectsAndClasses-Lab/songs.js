function solve(arr){

    class Song{
       constructor(type,name,time){
           this.type = type;
           this.name = name;
           this.time = time;
       }


    }



let times = Number(arr.shift());
let arrOfSongs = []

while(times > 0){
    let element = arr.shift();
    let input = element.split('_');
    
    let songType = input[0];
    let nameOfSong = input[1];
    let timeOfSong = input[2];
    

    let newSong = new Song(songType,nameOfSong,timeOfSong);

    arrOfSongs.push(newSong);

    times--;
}


let cmd = arr.shift();

if(cmd === 'all'){
    arrOfSongs.forEach((element) => console.log(element.name));
}else{

    arrOfSongs.filter(song => song.type === cmd).forEach(song => console.log(song.name));


}



}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);