//https://www.acmicpc.net/problem/1271
//엄청난 부자2

const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
    input = line.split(' ').map(el => BigInt(el));
    solution(input[0], input[1])
    rl.close();
})

rl.on('close', ()=> {
    process.exit();
})

function solution(a, b)
{
    console.log((a/b).toString())
    console.log((a%b).toString())
}