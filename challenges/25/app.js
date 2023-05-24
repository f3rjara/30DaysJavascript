import './styles.scss';

const boxs = document.querySelectorAll('.box');

function boxEventClick ( event ) {
  event.stopPropagation();
  console.log( this.classList.value );
  console.log('----');
}

boxs.forEach( box => box.addEventListener('click', boxEventClick, { capture: false, once: true } ) );