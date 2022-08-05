const CHANGE_COLOR_INTERVAL = 1000;
let intervalId = null;
let isRunningChange = false;

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
}

refs.startBtn.addEventListener('click', onClickStartBtn)
refs.stopBtn.addEventListener('click', onClickStopBtn)


function onClickStartBtn() {
  if (isRunningChange) return;

  refs.startBtn.disabled = true;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_INTERVAL)
}

function onClickStopBtn() {
  if (!isRunningChange) return;

  clearInterval(intervalId)
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
