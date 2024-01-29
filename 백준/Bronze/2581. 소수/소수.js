const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let count = 0;
var N, M = 0;
rl.on("line", (line) => {
    if(count === 0){
        N = Number(line)
        count++;
    }
    if(count === 1){
        M = Number(line)
    }
})

rl.on('close', ()=> {
    solution(N, M)
    process.exit();
})

function solution(n, m){
    var answer = 0;
    var first = 0;
     
    for(let i=n; i<=m; i++){
        const number = [];
        for(let j=1; j<=i; j++){
            if(i%j === 0){
                number.push(j)
            }
        }
        if(number.length === 2){
            answer += number[1]
            if(first === 0){
                first = number[1]
            }
        }
        
    }

    if(first !== 0 && answer !== 0){
        console.log(answer)
        console.log(first)
    }else{
        console.log(-1)
    }
    
}
