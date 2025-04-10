//https://www.acmicpc.net/problem/10872
//팩토리얼

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  var result = 1;
  for (let i = 1; i <= line; i++) {
    result *= i;
  }
  console.log(result);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
