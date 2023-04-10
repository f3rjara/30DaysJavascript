import './styles.scss';
import Prism from 'prismjs';

const consoleBox = document.getElementById('consoleBox');

function consoleBoxLog(message) {
  console.table(message);
  let highlightedCode = Prism.highlight(JSON.stringify(message), Prism.languages.javascript, 'javascript');
  consoleBox.innerHTML +=  highlightedCode + '<br><br>';
}

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

let message = 'Hello, to challenge 9!, 14 Must Know Dev Tools Tricks';

consoleBoxLog(message);
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const clickMe = document.getElementById('click-me');
clickMe.addEventListener('click', makeGreen);

consoleBoxLog('>> Regular');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.log('Hello');

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Interpolated');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.log('Hello I am a %s string!', '💩');

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Styled');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Warning!');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.warn('OH NOOO');

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Error :(');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.error('Error');

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Info');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.info('Crocodiles eat 3-4 people per year');

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Testing');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.assert(1 === 2, 'That is wrong!');

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Clearing');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
//console.clear();

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Viewing DOM Elements');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.log(clickMe);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Grouping together');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Counting');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');


consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Table');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
dogs.forEach(dog => {
  console.table(dog);
});


consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('>> Timing');
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });


