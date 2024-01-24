const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var count = 0;
var Sight = new Array();
rl.on("line", (line) => {
    if(!count){
        count = Number(line)
    }
    else{
        Sight.push(line);
        if(Sight.length === count){
            solution(Sight);
            rl.close();
        }
    }

})

rl.on('close', ()=> {
    process.exit();
})

function solution(arr){
    arr.forEach(el => {
        const numbers = el.split(" ").map(Number)
        const min = numbers[0]
        const max = numbers[1]
        const answer = factorial(max) / (factorial(min) * factorial(max - min))
        console.log(Math.round(answer))
    })
}

function factorial(num){
    if (num === 1 || num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
};