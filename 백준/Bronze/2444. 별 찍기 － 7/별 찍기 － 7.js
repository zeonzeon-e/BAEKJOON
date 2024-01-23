//https://www.acmicpc.net/problem/2444
//별 찍기 - 7

const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
    input = line.split(' ');
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
    for(let i = 1; i <= n; i++){
        for(let j=1; j <= n-i; j++){
            blank += " ";
        }
        for(let j = 1; j <= 2*i-1; j++){
            answer += "*";
        }
        console.log(blank + answer)
        answer = ""
        blank = ""
    }
    for(let i = n-1; i >= 1; i--){
        for(let j=1; j <= n-i; j++){
            blank += " ";
        }
        for(let j=1; j <= 2*i-1; j++){
            answer += "*"
        }
        console.log(blank + answer)
        answer = ""
        blank = ""
    }
}
