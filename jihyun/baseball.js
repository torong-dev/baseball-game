// Readline 모듈 사용
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function threeRandomNumber() {
  const numbers = Array.from({ length: 10 }, (_, index) => index.toString());
  // const numbers = [...new Array(9)].map((_, i) => i + 1);
  let randomNumbers = "";

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    randomNumbers += numbers.splice(randomIndex, 1)[0];
  }

  return randomNumbers;
}
