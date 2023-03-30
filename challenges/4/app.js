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

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const boulevards = [
  'Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', 'Boulevard de l\'Amiral-Bruix', 'Boulevard Mortier',
  'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy',
  'Boulevard du Crime', 'Boulevard Haussmann', 'Boulevard de l\'Hôpital', 'Boulevard des Italiens', 'Boulevard Lefebvre',
  'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard de Sébastopol',
  'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone'
];

consoleBoxLog(message);
consoleBoxLog('--> inventors:');
consoleBoxLog(inventors);
consoleBoxLog('--> boulevards:');
consoleBoxLog(boulevards);
consoleBoxLog('--> people:');
consoleBoxLog(people);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.filter  1. Filter the list of inventors for those who were born in the 1500s');

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500s
const inventorsBornIn1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
consoleBoxLog(inventorsBornIn1500s);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.map  2. Give us an array of the inventor first and last names');
// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const inventorsFirstAndLastNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
consoleBoxLog(inventorsFirstAndLastNames);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.sort  3. Sort the inventors by birthdate, oldest to youngest');
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsSortedByBirthdate = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
consoleBoxLog(inventorsSortedByBirthdate);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.reduce  4. How many years did all the inventors live?');
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYearsLived = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
consoleBoxLog(totalYearsLived);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.sort  5. Sort the inventors by years lived');
// Array.prototype.sort()
// 5. Sort the inventors by years lived
const inventorsSortedByYearsLived = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);
consoleBoxLog(inventorsSortedByYearsLived);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.map  6. create a list of Boulevards in Paris that contain \'de\' anywhere in the name');
// Array.prototype.map()
// 6. create a list of Boulevards in Paris that contain \'de\' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevardsWithDe = boulevards.filter(boulevard => boulevard.includes('de'));
consoleBoxLog(boulevardsWithDe);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.sort  7. Sort the people alphabetically by last name');
// Array.prototype.sort()
// 7. Sort the people alphabetically by last name
const peopleSortedByLastName = people.sort((a, b) => {
  const [aLast] = a.split(', ');
  const [bLast] = b.split(', ');
  return aLast > bLast ? 1 : -1;
});
consoleBoxLog(peopleSortedByLastName);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.reduce  8. Sum up the instances of each of these');
// Array.prototype.reduce()
// 8. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
consoleBoxLog(data);
const dataSum = data.reduce((obj, item) => {
  if (!obj[item]) {obj[item] = 0; }
  obj[item]++;
  return obj;
},{});
consoleBoxLog(dataSum);

consoleBoxLog('--------------------------------------------------------------------------------------------------------------------');
consoleBoxLog('--> Array.prototype.sort  9. Sort the people alphabetically by last name');
// Array.prototype.sort()
// 9. Sort the people alphabetically by last name
const peopleSortedByLastName2 = people.sort((a, b) => {
  const [aLast] = a.split(', ');
  const [bLast] = b.split(', ');
  return aLast > bLast ? 1 : -1;
});
consoleBoxLog(peopleSortedByLastName2);