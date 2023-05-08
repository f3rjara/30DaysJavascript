import './styles.scss';

// Sorting Band Names without articles

const bands = [ 'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
  'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog' ];

const strip = (bandName) => bandName.replace(/^(a |the |an )/i, '').trim();

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('.list_bands').innerHTML = sortedBands.map(band => `<li class="item">${band}</li>`).join('');