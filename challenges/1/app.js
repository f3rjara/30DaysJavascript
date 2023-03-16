import './styles.scss';
import { keySounds } from './../../utils/keySounds.js';

const keys = document.querySelector('.keys');
const template = document.querySelector('#template-key').content;
const fragment = document.createDocumentFragment();

for (const key in keySounds) {
  var hasBarProperty = Object.prototype.hasOwnProperty.call(keySounds, key);
  if (hasBarProperty) {
    const element = keySounds[key];
    const sound = element.sound.split('.');
    template.querySelector('kbd').textContent = key.toUpperCase();
    template.querySelector('span').textContent = sound[0].toUpperCase();
    template.querySelector('.key').dataset.key = element.key;
    template.querySelector('.key').dataset.sound = element.sound;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  }
}

keys.appendChild(fragment);

const playSound = (e) => {
  if (keySounds[e.key]) {
    const audio = document.querySelector(`audio[data-key="${keySounds[e.key].key}"]`);
    const key = document.querySelector(`.key[data-key="${keySounds[e.key].key}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
};

const removePlayingClass = (e) => {
  if (e.animationName !== 'prueba_playing') return;
  e.target.classList.remove('playing');
};

window.addEventListener('keydown', (playSound));

document.addEventListener('DOMContentLoaded', () => {
  const keysAll = document.querySelectorAll('.key');
  keysAll.forEach(key => key.addEventListener('animationend', removePlayingClass) );
});