import './styles.scss';

const challenge__content = document.querySelector('.challenge__content');
const subMenu = document.querySelector('.sub-menu');
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
challenge__content.append(highlight);

const highlightLink = ( e, isActive ) => {
  const linksCoords = e.target.getBoundingClientRect();
  const coords = {
    width: linksCoords.width,
    height: linksCoords.height,
    top: linksCoords.top + window.scrollY,
    left: linksCoords.left + window.scrollX
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translateX(${coords.left}px) translateY(${coords.top}px)`;
  highlight.style.background = 'yellow';
  
  if( isActive ) {
    subMenu.classList.add('active');
  } 
  else {
    subMenu.classList.remove('active');
  }


};

triggers.forEach((a) => a.addEventListener('mouseenter', (event) => highlightLink(event, true)));
triggers.forEach((a) => a.addEventListener('mouseleave', (event) => highlightLink(event, false)));