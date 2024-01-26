const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var count = 0;
var input = new Array();
rl.on("line", (line) => {
    if(!count){
        count = Number(line)
    }
    else{
        input.push(line)
        if(input.length === count){
            solution(input)
            rl.close()
        }
    }
})

rl.on('close', ()=> {
    process.exit();
})

function solution(n){
    var count = 0;

    //단어의 개수만큼 돈다
    for(let i =0; i < n.length; i++){
        let str = n[i]
        var words = new Array();
        count += 1;
        //단어의 알파벳 개수만큼 돈다
        for(let j = 0; j < n[i].length; j++){
            //words에 str[j]에 해당하는 알파벳이 없다면
            if(words.indexOf(str[j]) === -1){
                words.push(str[j])
            } else{
                //words에 str[j]가 들어있는 위치가 마지막 위치가 아니라면
                if(words.indexOf(str[j]) !== words.length - 1){
                    count -= 1;
                    break;
                }
            }
        }
    }
    console.log(count)
}
