// function solve(number) {

//     let gradeOutput = function (grade) {

//         if (grade >= 2 && grade < 3) {
//             console.log("Fail")
//         } else if (grade >= 3 && grade < 3.50) {
//             console.log("Poor")
//         } else if (grade >= 3.50 && grade < 4.50) {
//             console.log("Good")
//         } else if (grade >= 4.50 && grade < 5.50) {
//             console.log("Very good")
//         } else if (grade >= 5.50) {
//             console.log("Excellent")
//         }

//     }

// gradeOutput(number);

// }

//solve(3.33);


function solve(number){

let gradeInWords = (grade) => {

    if (grade >= 2 && grade < 3) {
                  console.log(`Fail (${grade.toFixed(2)})`)
                 } else if (grade >= 3 && grade < 3.50) {
                     console.log(`Poor (${grade.toFixed(2)})`)
                 } else if (grade >= 3.50 && grade < 4.50) {
                     console.log(`Good (${grade.toFixed(2)})`)
                 } else if (grade >= 4.50 && grade < 5.50) {
                     console.log(`Very good (${grade.toFixed(2)})`)
                 } else if (grade >= 5.50) {
                     console.log(`Excellent (${grade.toFixed(2)})`)
             }
}


gradeInWords(number);
}

solve(6.00);