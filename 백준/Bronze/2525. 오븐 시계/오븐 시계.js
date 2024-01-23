const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var count = 0;
var nowTime = new Array();
var duringTime = new Array();
rl.on("line", (line) => {
    if(count === 0){
        nowTime = line.split(' ');
        count++;
    }
    if(count === 1){
        duringTime = line.split(' ');
    }

})

rl.on('close', ()=> {
    solution(nowTime, duringTime)
    process.exit();
})

function solution(nowTime, duringTime)
{
    let hour = parseInt(nowTime[0]);
    let min = parseInt(nowTime[1]) + parseInt(duringTime);
    while(min >= 60){
        hour++;
        min -= 60;
    }
    while(hour >= 24){
        hour -= 24;
    }
    console.log(hour, min)
}