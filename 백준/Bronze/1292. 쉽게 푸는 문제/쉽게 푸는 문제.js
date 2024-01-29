const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
    input = line.split(" ")
    solution(input)
    rl.close();
})

rl.on('close', ()=> {
    process.exit();
})

function solution(n){
    const count = n[1];
    const result = [];
    var answer = 0;
    let i =0;
    let num = 1;
    while(i <= count){
        for(let j=1; j<=num; j++){
            result.push(num)
            i++
        }
        num++
    }
    for(let k = Number(n[0])-1; k < count; k++){
        answer += result[k]
    }
    console.log(answer)
}
