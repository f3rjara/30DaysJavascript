import './styles.scss';

const speech_btn = document.querySelector('.speech');
const clean_btn = document.querySelector('.clean');

let isSpeech = false;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'es-ES';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  
  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
  p.textContent = poopScript;

  if( e.results[0].isFinal ) {
    p = document.createElement('p');
    words.appendChild(p);
  }

});

const startSpeechRecognition = () => {
  isSpeech = !isSpeech;
  if (!isSpeech) {
    stopRecognition();
  } else {
    startRecognition();
  }
};

const startRecognition = () => {
  recognition.start();
  recognition.addEventListener('end', restartRecognition);
  speech_btn.classList.add('active');
  speech_btn.innerHTML = 'Listening... (click to stop)';
};

const stopRecognition = () => {
  recognition.stop();
  recognition.removeEventListener('end', restartRecognition);
  speech_btn.classList.remove('active');
  speech_btn.innerHTML = 'Start talking';
};

const restartRecognition = () => {
  recognition.removeEventListener('end', restartRecognition);
  startRecognition();
};

const cleanWords = () => {
  words.innerHTML = '';
};

speech_btn.addEventListener('click', startSpeechRecognition );
clean_btn.addEventListener('click', cleanWords );