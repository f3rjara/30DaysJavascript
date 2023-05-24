import './styles.scss';

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


const handleEnter = ( event ) => {
  event.target.classList.add('trigger-enter');
  setTimeout (() =>  {
    if( event.target.classList.contains('trigger-enter') ) {
      event.target.classList.add('trigger-enter-active');
    }
  }, 150);
  
  const dropdown = event.target.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  background.style.opacity = '0';
  background.style.display = 'flex';

  const coords = {
    height: dropdownCoords.height ,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

  background.classList.add('open');
  setTimeout( () => background.style.opacity = '1', 150 );
};

const handleLeave = ( event ) => {
  event.target.classList.remove('trigger-enter', 'trigger-enter-active');
  background.style.opacity = '0';
  background.style.display = 'none';
  background.classList.remove('open');
};


triggers.forEach( triggers => triggers.addEventListener('mouseenter', (event) => handleEnter(event)) );
triggers.forEach( triggers => triggers.addEventListener('mouseleave', (event) => handleLeave(event)) );
