import './styles.scss';

const sliderImages = document.querySelectorAll('.slide-in');

function debounce( func, wait = 20, inmediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if(!inmediate) func.apply(context, args);
    };
    const callNow = inmediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
  };
}

function checkSlide() {
  sliderImages.forEach( sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 3;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if( isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    }
    else {
      sliderImage.classList.remove('active');
    }

  });
}

window.addEventListener('scroll', debounce(checkSlide));