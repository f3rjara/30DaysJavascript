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

let message = 'Hello, to challenge 7!, array Cardio; please open the console to see the results';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

consoleBoxLog(message);
consoleBoxLog('--> people:');
consoleBoxLog(people);
consoleBoxLog('--> comments:');
consoleBoxLog(comments);


consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.some  1. Some and Every Checks is at least one person 19?');

const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});
consoleBoxLog(isAdult);

// is everyone 19?
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.some  2. Every Checks is everyone 19?');

const allAdults = people.every(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});
consoleBoxLog(allAdults);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.find  3.  Find is like filter, but instead returns just the one you are looking for find the comment with the ID of 823423');

const comment  = comments.find(comment => comment.id === 823423 ) || null;
consoleBoxLog(comment);

//delete the comment with the ID of 823423
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.findIndex  4. Find the comment with this ID 823423 and delete it');
consoleBoxLog('--> If result is equal 1 then delete the comment, if result is equal -1 then comment not found');
const index = comments.findIndex(comment => comment.id === 823423) || null;
consoleBoxLog(index);

consoleBoxLog(comments[index]);


// comments.splice(index, 1);
consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.findIndex  5. Create a new array without the deleted comment');
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];

consoleBoxLog(newComments);

