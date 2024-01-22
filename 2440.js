//https://www.acmicpc.net/problem/2440
//별 찍기 -3 

const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    solution(input)
    rl.close();
})

rl.on('close', ()=> {
    process.exit();
})

function solution(n)
{
    let answer = "";
    for(let i = 0; i< n; i++){
        for(let j = 1; j <= n-i; j++){
            answer += "*";
        }
        console.log(answer)
        answer = "";
    }
}
