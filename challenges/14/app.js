import './styles.scss';
import Prism from 'prismjs';

const consoleBox = document.getElementById('consoleBox');
function consoleBoxLog(message) {
  console.table(message);
  // Resaltar la sintaxis del código con Prism.js
  let highlightedCode = Prism.highlight(JSON.stringify(message), Prism.languages.javascript, 'javascript');
  // Establecer el contenido del editor con el código resaltado
  consoleBox.innerHTML +=  highlightedCode + '<br><br>';
}

let message = 'Hello, to challenge 4!, array Cardio; please open the console to see the results';

consoleBoxLog(message);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);
consoleBoxLog(players);
consoleBoxLog(team);
// You might think we can just do something like this:
// team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

consoleBoxLog(team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

consoleBoxLog(team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);

const team5 = Array.from(players);

consoleBoxLog(team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

consoleBoxLog(cap2);

// We will hopefully soon see the object ...spread
// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

consoleBoxLog(dev);

const dev2 = JSON.parse(JSON.stringify(wes));

consoleBoxLog(dev2);
