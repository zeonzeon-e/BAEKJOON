//https://www.acmicpc.net/problem/5554
//심부름 가는 길

const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
    //여러 줄 입력
    input.push(line)
})

rl.on('close', ()=> {
    solution(input)
    process.exit();
})

function solution(arr)
{
    let minute = 0;
    let second = 0;

    for(let i of arr){
        second += parseInt(i);
        /*
        while을 써준 이유
        if로 하면, 한 번밖에 실행되지 않기 때문에 second에서
        60을 빼고 나서도 60이 넘을 경우, 에러가 나게 된다.
        */
        while(second >= 60){
            minute++;
            second -= 60
        }
    }
    console.log(minute)
    console.log(second)
}