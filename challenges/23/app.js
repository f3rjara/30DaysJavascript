import './styles.scss';

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

const populateVoices = (e) => {
  voices = e.target.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
};

const setVoice = (e) => {
  msg.voice = voices.find(voice => voice.name === e.target.value);
  //toggle();
};

const toggle = (startOver = true) => {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
};

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', () => {
  msg[option.name] = option.value; // eslint-disable-line indent
  toggle();
}));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));