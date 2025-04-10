//https://www.acmicpc.net/problem/2741
//N 찍기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  for (let i = 0; i < line; i++) {
    console.log(i + 1);
  }

  rl.close();
});

rl.on("close", () => {
  process.exit();
});
