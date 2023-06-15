import './styles.scss';

const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const label = document.querySelector('.label');
const video = document.querySelector('.video');

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0;
  const max = 5;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (min - max) + max;
  speedBar.style.height = height;
  label.innerHTML = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);