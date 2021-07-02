const startButton = document.querySelector(".start-button");
const restartButton = document.querySelector(".restart-button");
const firstChance = document.querySelector(".first");
const secondChance = document.querySelector(".second");
const thirdChance = document.querySelector(".third");
const checkButton = document.querySelector(".check-button");
const result = document.querySelector(".result");
const times = document.querySelector(".times");
const recheckButton = document.querySelector(".recheck-button");
let initialNum =[];

startButton.addEventListener("click", getInitialNumber);
restartButton.addEventListener("click", goToReset);
checkButton.addEventListener("click", getPlayNumber);
recheckButton.addEventListener("click", goToRecheck);


function getInitialNumber () {
  for (let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random()*10);
    initialNum.push(randomNum);
  }

};

function getPlayNumber () {
  const firstNum = firstChance.value;
  const secondNum = secondChance.value;
  const thirdNum = thirdChance.value;
  const playNum = [];
  playNum.push(+firstNum, +secondNum, +thirdNum);

  let strike = 0;
  let ball = 0;
  let out = 0;

  for (let i = 0; i < initialNum.length; i++) {
    for (let j = 0; j < playNum.length; j++) {
      if (initialNum[i] === playNum[i]) {
        strike++;
        result.textContent = `${strike}S ${ball}B ${out}O`;
        challenges++;
        break;
      }

      if (initialNum[i] === playNum[j+1]) {
        ball++;
        result.textContent = `${strike}S ${ball}B ${out}O`;
        break;
      }

      if (initialNum[i] === playNum[j+2]) {
        ball++;
        result.textContent = `${strike}S ${ball}B ${out}O`;
        break;
      }

      if (initialNum[i] !== playNum[j]) {
        out++;
        result.textContent = `${strike}S ${ball}B ${out}O`;
        break;
      }
    }
  }

};

let challenges = 0;
times.textContent = `${challenges}회`;

function goToRecheck () {
  firstChance.value = "";
  secondChance.value = "";
  thirdChance.value = "";
  result.textContent = "";

  if (challenges < 10) {
    challenges++;
    times.textContent = `${challenges}회`;
  } else {
    times.textContent = `${challenges}회`;
    alert("도전 횟수가 종료되었습니다.")
  }

};

function goToReset () {
  firstChance.value = "";
  secondChance.value = "";
  thirdChance.value = "";
  result.textContent = "";
  challenges = 0;
  times.textContent = `${challenges}회`;
  initialNum = [];

  for(let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random()*10);
    initialNum.push(randomNum);
  }

};











