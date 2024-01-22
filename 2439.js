//https://www.acmicpc.net/problem/2439
//별 찍기 -2 

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
    let blank = "";
    for(let i = 1; i<=n; i++){
        answer += "*";
        for(let j = 0; j < n-i; j++){
            blank += " ";
        }
        console.log(blank + answer)
        blank = "";
    }
}
