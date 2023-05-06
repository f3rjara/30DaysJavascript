import './styles.scss';

const hero = document.querySelector('.hero');
const title = document.querySelector('.hero__title');
let walk = 10; // 100px

const btn_add_walk = document.querySelector('#add_walk');
const btn_remove_walk = document.querySelector('#remove_walk');
const walk_text = document.querySelector('.walk_text');

walk_text.innerHTML = walk;

const populateText = ( text, xWalk, yWalk ) => {
  text.style.textShadow = `
    ${ xWalk }px ${ yWalk }px 0 rgba(255, 0, 255, 0.7),
    ${ xWalk * -1 }px ${ yWalk }px 0 rgba(0, 255, 255, 0.7),
    ${ yWalk }px ${ xWalk * -1 }px 0 rgba(0, 255, 0, 0.7),
    ${ yWalk * -1 }px ${ xWalk }px 0 rgba(0, 0, 255, 0.7)
  `;
};

const shadownText = ( event ) => {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;

  if ( this !== event.target ) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xWalk = Math.round( ( x / width * walk ) - ( walk / 2 ) );
  const yWalk = Math.round( ( y / height * walk ) - ( walk / 2 ) );

  populateText( title, xWalk, yWalk );
};

document.addEventListener('mousemove', shadownText);

btn_add_walk.addEventListener('click', () => {
  if(walk < 200) walk += 10;
  walk_text.innerHTML = walk;
  populateText( title, 0, 0 );

});

btn_remove_walk.addEventListener('click', () => {
  if(walk > 0) walk -= 10;
  walk_text.innerHTML = walk;
  populateText( title, 0, 0 );
});

