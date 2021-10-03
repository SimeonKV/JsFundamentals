function solve(arr) {

    arr.sort().forEach((element, index) => {
        console.log(`${index + 1}.${element}`)
    })

}

solve(['Watermelon','Banana','Apple'])