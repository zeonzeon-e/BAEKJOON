
const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let list = []
let vote = [];
let cnt = 0;
let i = 0;
rl.on("line", (line) => {
    if(!cnt){
       cnt = Number(line)
    }else{
        if(cnt !== i){
            vote.push(Number(line))
            i++
        }
        if(cnt === i){
            solution(vote[0], vote.slice(1))
            rl.close();
        }
    }
})

rl.on('close', ()=> {
    process.exit();
})


function solution(first, vote){
    let max = Math.max(...vote)
    let cnt = 0;
    while(first <= max){
        vote[vote.indexOf(max)] -= 1;
        cnt++;
        first++;
        max = Math.max(...vote)
    }
    console.log(cnt)
}

