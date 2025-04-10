// https://www.acmicpc.net/problem/2839
// 설탕 배달

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = new Array();
rl.on("line", (line) => {
  //여러 줄 입력
  //input.push(line);
  solution(line);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});

function solution(num) {
  let count = 0;

  while (num >= 0) {
    if (num % 5 === 0) {
      count += num / 5;
      console.log(count);
      return;
    }
    num -= 3;
    count++;
  }

  console.log(-1);
}
