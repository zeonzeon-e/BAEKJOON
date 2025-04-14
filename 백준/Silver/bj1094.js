// https://www.acmicpc.net/problem/1094
// 막대기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const STICK = 64;
rl.on("line", (line) => {
  solution(Number(line));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});

function solution(line) {
  var stick = STICK;
  var count = 0;
  var result = 0;
  while (stick >= 1) {
    if (stick > line) {
      stick /= 2;
    } else if (stick + result <= line) {
      result += stick;
      count++;
      stick /= 2;
      if (result === line) console.log(count);
    } else {
      stick /= 2;
    }
  }
}
