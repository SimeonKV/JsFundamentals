function solve(text){
    let fromJasonToObj = JSON.parse(text);
    
    for(let entry in fromJasonToObj){
        console.log(`${entry}: ${fromJasonToObj[entry]}`)
    }


}


solve('{"name": "Simeon","age": 26,"town":"Sandanski"}')