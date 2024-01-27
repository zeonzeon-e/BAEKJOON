const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var count = 0;
var input = new Array();
rl.on("line", (line) => {
    if(!count){
        count = Number(line)
    }
    else{
        input.push(line)
        if(input.length === count){
            solution(input)
            rl.close()
        }
    }
})

rl.on('close', ()=> {
    process.exit();
})

function solution(n){
    n.sort((a, b) => a - b)
    n = n.join('\n')
    console.log(n)
}
