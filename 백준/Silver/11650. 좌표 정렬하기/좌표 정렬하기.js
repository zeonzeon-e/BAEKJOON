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
        input.push(line.split(' '))
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
    n.sort((a,b)=>{
        if(a[0] !== b[0]){
            return a[0] - b[0]
        }
        return a[1] - b[1];
    }).forEach(el => {
        el[0] = `${el[0]} ${el[1]}`
        el.pop()
    })
    n = n.join('\n')
    console.log(n)
}
