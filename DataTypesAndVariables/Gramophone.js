function solve(nameOfTheBand,nameOfTheAlbum,songName){
let songDuration = (nameOfTheAlbum.length * nameOfTheBand.length) *
 (songName.length / 2);

 let fullRotation = 2.5;
 let rotations = Math.ceil(songDuration / fullRotation);

console.log(`The plate was rotated ${rotations} times.`);

}

solve('Black Sabbath','Paranoid','War Pigs');