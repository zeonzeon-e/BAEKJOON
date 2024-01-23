//https://www.acmicpc.net/problem/2845
//파티가 끝나고 난 뒤

const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var count = 0;
var input1 = new Array();
var input2 = new Array();
rl.on("line", (line) => {
    //여러 줄 입력
    if(count === 0){
        input1 = line.split(' ')
        count++;
    }
    if(count === 1){
        input2 = line.split(' ')
    }
})

rl.on('close', ()=> {
    solution(input1, input2)
    process.exit();
})

function solution(L, P)
{
    let people = input1[0] * input1[1]
    var answer = new Array()
    for(let i in input2)
        answer[i] = input2[i] - people
    answer = answer.toString().replaceAll(',', ' ')
    console.log(answer);
}