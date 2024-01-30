const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var N = [];
var M = [];
var i = 0
var count = 0;
var find
rl.on("line", (line) => {
    if(i === 1){
        find = line.split(' ').map(Number)
    }
    if(i === 0){
        N = line.split(' ').map(Number)
        M = N[1]
        N = N[0]
        i++;
    }
})

rl.on('close', ()=> {
    solution(N, M, find)
    process.exit();
})


function solution(N, M, find){
    const deque = new Deque();
    var answer = 0;
    var list = [];
    for(let i = 1; i<=N; i++){
        deque.push(i)
    }

    find.forEach((find) => {
        const idx = deque.indexOf(find);
        if(idx === 0)
            deque.leftPop();

        else{
            if(idx <= Math.floor(deque.length/2)){
                deque.rotate(-idx);
                deque.leftPop();
                answer += idx;
            }else{
                deque.rotate(deque.length - idx);
                answer += deque.length - idx;
                deque.leftPop();
            }
        }
        return answer;
    })

    console.log(answer)
}

class Deque extends Array {
    leftPop() {
        return this.shift();
    }
    leftPush(value){
        return this.unshift(value);
    }
    front(){
        return this[0]
    }
    back(){
        return this[this.length - 1]
    }
    rotate(idx){
        if(idx > 0){
            while(idx--)
                this.unshift(this.pop())
        }else{
            while(idx++)
                this.push(this.shift())
        }
    }
}

