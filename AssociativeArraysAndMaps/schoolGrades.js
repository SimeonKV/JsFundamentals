function solve(arr) {
    let students = new Map();


    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(' ');
        let [name, ...grades] = tokens;


        if (!students.has(name)) {
            students.set(name, grades);
        } else {
            let currentGrades = students.get(name);
            let newGrades = currentGrades.concat(grades);

            students.set(name, newGrades);
        }


    }


    let arrOfStudents = Array.from(students.entries())
        .sort((sudentOne, studentTwo) => {
            let studentOneAvgGrade = findAverageGrade(sudentOne[1]);
            let studentTwoAvgGrade = findAverageGrade(studentTwo[1]);

            return studentOneAvgGrade - studentTwoAvgGrade;

        })
        .forEach((student) => {
            console.log(`${student[0]}: ${student[1].join(', ')}`)
        })


   function findAverageGrade(stringOfGrades) {
         let totalSum = 0;

         for(let i = 0; i < stringOfGrades.length; i++){
            let grade = Number(stringOfGrades[i]);
            totalSum += grade;

         }



         return totalSum / stringOfGrades.length;

    }

}


solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);