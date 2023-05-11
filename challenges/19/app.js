/* eslint-disable indent */
import './styles.scss';

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const btn_take = document.querySelector('.btn_take');
const btn_filters = document.querySelectorAll('.btn_filter');
let pixels_default = [];
let filter_active = 'normal';

const getVideoData = () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => console.error('Oh no!', err));
};

const paintToCanvas = () => {
  const { videoWidth: width, videoHeight: height } = video;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    pixels_default = ctx.getImageData(0, 0, width, height);
    pixels_default = greenScreen(pixels_default);
    let pixels = [];

    switch (filter_active) {
      case 'normal':
        ctx.globalAlpha = 1;
        ctx.putImageData(pixels_default, 0, 0);
        break;
      case 'red':
        pixels = redEffect(pixels_default);
        ctx.putImageData(pixels, 0, 0);
        break;
      case 'green':
        pixels = rgbSplit(pixels_default);
        ctx.putImageData(pixels, 0, 0);
        break;
      case 'ghost':
        ctx.globalAlpha = 0.1;
        ctx.putImageData(pixels_default, 0, 0);
        break;
      default:
        ctx.putImageData(pixels_default, 0, 0);
    }
  }, 16);
};

const takePotho = () => {
  /* play to sound */
  snap.currentTime = 0;
  snap.play();

  /* take the data out of the canvas */
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');

  link.href = data;
  link.setAttribute('download', 'Photo web fun');
  link.innerHTML = `<img src="${data}" alt="hands Awesome" />`;

  strip.insertBefore(link, strip.firstChild);

};

const redEffect = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
};

const rgbSplit = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 150] = pixels.data[i + 2]; // BLUE
  }
  return pixels;
};

const greenScreen = (pixels) => {
  const levels = {};

  [...document.querySelectorAll('.rgb input')].forEach((input) => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i += 4) {
    let red = pixels.data[i + 0]; // RED
    let green = pixels.data[i + 1]; // GREEN
    let blue = pixels.data[i + 2]; // BLUE
    let alpha = pixels.data[i + 3]; // ALPHA

    if (
          red >= levels.rmin
      &&  red <= levels.rmax
      &&  green >= levels.gmin
      &&  green <= levels.gmax
      &&  blue >= levels.bmin
      &&  blue <= levels.bmax 
      &&  alpha > 200) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
};

const applyFilter = (e) => {
  const data_filter = e.target.dataset.filter;
  // add class active
  btn_filters.forEach(btn => {
    btn.classList.remove('active');
  });
  e.target.classList.add('active');

  filter_active =  data_filter;
};

document.addEventListener('DOMContentLoaded', getVideoData);
video.addEventListener('canplay', paintToCanvas);
btn_take.addEventListener('click', takePotho);

btn_filters.forEach(btn => {
  btn.addEventListener('click', applyFilter);
});