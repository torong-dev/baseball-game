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

// 게임 실행 함수
function playNumberBaseball() {
  const answer = threeRandomNumber();
  let attempts = 0;

  console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

  // 입력을 받는 함수
  function getUserInput() {
    // Readline 모듈 사용
    rl.question(`${attempts + 1}번째 시도: `, (userGuess) => {
      const result = checkGuess(answer, userGuess);
      console.log(result);

      if (result === "3S") {
        console.log(`${attempts + 1}번만에 맞혔습니다.`);
        console.log("게임을 종료합니다.");
        rl.close();
      } else {
        attempts++;
        getUserInput();
      }
    });
  }

  getUserInput();
}

playNumberBaseball();
