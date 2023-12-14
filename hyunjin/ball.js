// 게임에 필요한 변수 초기화
let answer = generateRandomNumber();
let attempts = 0;

// HTML 요소 가져오기
const output = document.getElementById('output');
const userInput = document.getElementById('userInput');

// 1. 메인 게임 로직
function checkGuess() {
    // HTML 입력값 가져오기
    const guess = userInput.value;

    // 입력값이 3자리 숫자인지 확인
    if (!isValidInput(guess)) {
        alert('세 자리 숫자를 입력하세요.');
        return;
    }

    // 시도 횟수 증가
    attempts++;

    // 스트라이크와 볼 계산
    const result = calculateResult(guess);

    // 결과 출력
    output.innerHTML += `${attempts}번째 시도: ${guess} - ${result}<br>`;

    // 정답 여부 확인
    if (result === '3S') {
        output.innerHTML += `${attempts}번만에 맞혔습니다. 게임을 종료합니다.`;
        userInput.disabled = true;
    }

    // 입력 창 초기화
    userInput.value = '';
}

// 2. 랜덤 숫자 생성 함수
function generateRandomNumber() {
    let numbers = [];

    // 서로 다른 숫자 3개 뽑기
    while (numbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 10);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers.join('');
}

// 3. 입력값이 3자리 숫자인지 확인하는 함수
function isValidInput(input) {
    return /^\d{3}$/.test(input);
}

// 4. 볼과 스트라이크 계산하는 함수
function calculateResult(guess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
        const digit = guess[i];
        if (digit === answer[i]) {
            strikes++;
        } else if (answer.includes(digit)) {
            balls++;
        }
    }

    // 결과 문자열 생성
    let result = '';
    if (strikes > 0) {
        result += `${strikes}S`;
    }
    if (balls > 0) {
        result += `${balls}B`;
    }

    return result || '0B0S';
}
