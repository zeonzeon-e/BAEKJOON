// https://www.acmicpc.net/problem/4153
// 직각삼각형

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
  //여러 줄 입력
  input = line.split(" ").map(Number);
  if (input[0] == 0 && input[1] == 0 && input[2] == 0) rl.close();
  solution(input);
});

rl.on("close", () => {
  process.exit();
});

function solution(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  if (arr[0] * arr[0] + arr[1] * arr[1] === arr[2] * arr[2])
    console.log("right");
  else console.log("wrong");
}
