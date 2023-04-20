import './styles.scss';

const presedKeys = [];
const secretCode = 'konami';
const btn__happy = document.querySelector('.btn__happy');

setTimeout(() => {
  console.log('You are so happy!');
  cornify_add();
}, 1000);

window.addEventListener('keyUp', (e) => {
  presedKeys.push(e.key);
  presedKeys.splice(-secretCode.length - 1, presedKeys.length - secretCode.length);
  if (presedKeys.join('').includes(secretCode)) { cornify_add(); }
});

btn__happy.addEventListener('click', cornify_add());