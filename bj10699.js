// https://www.acmicpc.net/problem/10699
// 오늘 날짜

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

console.log(`${year}-${month}-${day}`);
