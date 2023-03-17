import './styles.scss';

const clock = document.querySelector('.clock');

function setDate() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const handsData = [
    { hand: 'hour', degrees: linearMap(hours, 0, 12, 0, 360) },
    { hand: 'minute', degrees: linearMap(minutes, 0, 60, 0, 360) },
    { hand: 'second', degrees: linearMap(seconds, 0, 60, 0, 360) },
  ];

  clock.title = `Son las ${hours}:${minutes}:${seconds}`;

  handsData.forEach(({ hand, degrees }) => {
    const handElement = clock.querySelector(`.clock__hand--${hand}`);
    handElement.style.transform = `rotate(${degrees}deg)`;
    handElement.style.transition = degrees === 0 ? 'none' : '';
  });
}

function linearMap(value, min, max, minDegree, maxDegree) {
  return minDegree + (maxDegree - minDegree) * (value - min) / (max - min);
}

setInterval(setDate, 1000);