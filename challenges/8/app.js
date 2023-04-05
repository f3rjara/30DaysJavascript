import './styles.scss';

const canvas = document.getElementById('canvas');
const canvas_container = document.querySelector('.canvas');
const clearButton = document.getElementById('clear-button');
const ctx = canvas.getContext('2d');

const strokeStyle = '#BADA55';
const lineJoin = 'round';
const lineCap = 'round';
const lineWidth = 1;

// tamaño al canvas from canvas_container
canvas.width = canvas_container.offsetWidth;
canvas.height = canvas_container.offsetHeight;

// if resize window change canvas size but no change ctx
window.addEventListener('resize', () => {
  // Guardar el contenido actual del canvas
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  // Redimensionar el canvas
  canvas.width = canvas_container.offsetWidth;
  canvas.height = canvas_container.offsetHeight;

  // Restaurar los ajustes de estilo
  ctx.strokeStyle = strokeStyle;
  ctx.lineJoin = lineJoin;
  ctx.lineCap = lineCap;
  ctx.lineWidth = lineWidth;

  // Restaurar el contenido previo del canvas
  ctx.putImageData(imageData, 0, 0);
});

// configuracion del canvas
ctx.strokeStyle = strokeStyle;
ctx.lineJoin = lineJoin;
ctx.lineCap = lineCap;
ctx.lineWidth = lineWidth;
//ctx.globalCompositeOperation = 'multiply';
let isDrawing = false;

//capturar los puntos iniciales
let lastX = 0;
let lastY = 0;
let hue = 1;
let direction = true;

function draw( event ) {
  if( !isDrawing ) return; 
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke(); 
  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue = hue > 360 ? 0 : hue + 1;

  if( ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ) {
    direction = !direction;
  }
  ctx.lineWidth = direction ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});