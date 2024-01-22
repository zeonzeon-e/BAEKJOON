//https://www.acmicpc.net/problem/1000
//a+b

const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
})

rl.on('close', ()=> {
    process.exit();
})

function solution(a, b)
{
    const answer = a+b
    console.log(answer)
    return answer
}