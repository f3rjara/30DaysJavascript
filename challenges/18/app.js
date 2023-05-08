import './styles.scss';

// Tally String Times with Reduce

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const total_time = document.querySelector('.total_time');

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

total_time.innerHTML = `Total time: ${hours}:${mins}:${secondsLeft}`;
