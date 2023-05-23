import './styles.scss';

const nav =  document.querySelector('.nav__main');
const nav_offsetTop = nav.offsetTop;

const fixNavMain = () => {
  if( window.scrollY >= nav_offsetTop ) {
    document.body.classList.add('scroll_nav_top');
    nav.classList.add('scroll_nav_top');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  }
  else {
    nav.classList.remove('scroll_nav_top');
    document.body.classList.remove('scroll_nav_top');
  }
};

window.addEventListener('scroll', fixNavMain ); 