const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timerId;

const zeroPad = (num, places) => String(num).padStart(places, '0');

const createTimerAnimator = () => {
  return (seconds) => {
    timerId = setInterval(() =>{
      let h = Math.floor(seconds / 3600);
      let m = Math.floor((seconds - h * 3600) / 60);
      let s = Math.floor((seconds - h * 3600 - m * 60));

      timerEl.textContent = `${zeroPad(h, 2)}:${zeroPad(m, 2)}:${zeroPad(s, 2)}`;
      seconds--;

      if(0 >= seconds) clearInterval(timerId);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g,'');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  if(timerId) clearInterval(timerId);
  animateTimer(seconds);

  inputEl.value = '';
});
