
const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let N = 0;
rl.on("line", (line) => {
    N = Number(line)
    solution(N)
    rl.close();
})

rl.on('close', ()=> {
    process.exit();
})


function solution(N){
    let card = []
    let answer = []
    for(let i =0; i<N;i++){
        card[i] = i+1
    }

    while(card[0] !== undefined){
        answer.push(card.shift());
        card.push(card.shift())
    }
    console.log(answer.join(',').replaceAll(',', ' '))
}

