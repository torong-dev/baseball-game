// Readline 모듈 사용
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 난수 생성 함수
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

// 결과 반환 함수
function checkGuess(answer, guess) {
  let strikes = 0;
  let balls = 0;

  const checkedIndexes = new Set();

  // strikes
  for (let i = 0; i < 3; i++) {
    if (guess[i] === answer[i]) {
      strikes++;
      checkedIndexes.add(i);
    }
  }

  // balls
  for (let i = 0; i < 3; i++) {
    if (!checkedIndexes.has(i)) {
      if (answer.includes(guess[i])) {
        balls++;
      }
    }
  }

  if (strikes === 3) {
    return "3S";
  }

  const ballsStr = balls > 0 ? `${balls}B` : "0B";
  const strikesStr = strikes > 0 ? `${strikes}S` : "0S";

  return `${ballsStr}${strikesStr}`;
}
