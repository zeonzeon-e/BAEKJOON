const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
    input = line.split(" ")
    solution(input)
    rl.close()

})

rl.on('close', ()=> {
    process.exit();
})

function solution(arr){
    let firstGap = arr[1] - arr[0] - 1;
    let SecondGap = arr[2] - arr[1] - 1;

    firstGap > SecondGap ? console.log(firstGap) : console.log(SecondGap)
}