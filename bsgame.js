const input = document.querySelector(".input");
const button = document.querySelector(".submit");

function randomArray() {
  let array = new Set();

  while (array.size < 3) {
    array.add(Math.trunc(Math.random() * 10));
  }

  return [...array];
}

let count = 1;
const random = randomArray();

function baseball(myNum) {
  const myNumArray = myNum.split("");
  let s = 0;
  let b = 0;

  for (let i = 0; i < random.length; i++) {
    if (random[i] == myNumArray[i]) {
      s++;
    } else if (random.includes(parseInt(myNumArray[i]))) {
      b++;
    }
  }

  if (s === 3) {
    console.log(`${count}번만에 맞히셨습니다.\n게임을 종료합니다.`);
    alert(`${count}번만에 맞히셨습니다.\n게임을 종료합니다.`);
  }

  console.log(`${count}번째 시도 : ${myNum}\n${b}B${s}S`);

  count++;
}

button.addEventListener("click", () => {
  let num = input.value;
  baseball(num);
  input.value = "";
});
