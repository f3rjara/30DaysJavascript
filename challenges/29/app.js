import './styles.scss';

const nav__links = document.querySelectorAll('.nav__link');
const display__time = document.querySelector('.display__time');
const display__end = document.querySelector('.display__end');
const form_minutes = document.querySelector('#formMinutes');

let countdown;


const timerInit = (seconds) => {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  },1000);
};

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  display__time.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
};

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const ajustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  display__end.textContent = `Be Back At ${ajustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
};

nav__links.forEach((link) => {
  link.addEventListener('click', () => {
    nav__links.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
    const timer = link.getAttribute('data-timer');
    timerInit(timer);
  });
});


form_minutes.addEventListener('submit', (e) => {
  e.preventDefault();
  const minutes = e.target.minutes.value;
  timerInit(minutes * 60);
  e.target.reset();
});