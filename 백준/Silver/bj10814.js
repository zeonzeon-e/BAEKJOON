// https://www.acmicpc.net/problem/10814
// 나이순 정렬

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = [];
let cnt = 0;
let i = 0;
rl.on("line", (line) => {
  if (!cnt) {
    cnt = Number(line);
  } else {
    if (cnt !== i) {
      list.push(line);
      i++;
    }
    if (cnt === i) {
      solution(list);
      rl.close();
    }
  }
});

rl.on("close", () => {
  process.exit();
});

function solution(list) {
  console.log(
    list
      .map((el) => ({
        age: parseInt(el.split(" ")[0]),
        name: el.split(" ")[1],
      }))
      .sort((a, b) => a.age - b.age)
      .map((v) => String(v.age) + " " + v.name)
      .join("\n")
  );
}
