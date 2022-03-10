var canvas = document.querySelector('#draw-board'),
    context = canvas.getContext('2d'),
    color = document.querySelector('#color'),
    width = document.querySelector('#width'),
    eraser = document.querySelector('#eraser'),
    pen = document.querySelector('#pen'),
    widthText = document.querySelector('#width-text');


canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.8;




context.strokeStyle = '#fa6167';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 1;


let isDrawing = false;
var coordinateX = 0;
var coordinateY = 0;
var selected = 'pen'


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', changeCoordinate);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
color.addEventListener('change', () => {
    selected == 'eraser' ? context.strokeStyle = `#202124` : context.strokeStyle = `${color.value}`;
});
width.addEventListener('change', () => context.lineWidth = `${width.value}`);
// eraser.addEventListener('change', () => {
//     console.log(eraser.value);
//     eraser.value == 'on' ? context.strokeStyle = `#202124` : context.strokeStyle = context.strokeStyle = `${color.value}`;
// });
eraser.addEventListener('click', selectedEraser);
pen.addEventListener('click', selectedPen);



function draw(e) {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(coordinateX, coordinateY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [coordinateX, coordinateY] = [e.offsetX, e.offsetY];
}


function changeCoordinate(e) {
    if (!isDrawing) [coordinateX, coordinateY] = [e.offsetX, e.offsetY];
    isDrawing = true;
}

function selectedEraser(e) {
    e.preventDefault();
    if (selected == 'eraser') return
    this.classList.add('active');
    pen.classList.remove('active');
    selected = 'eraser';
    context.strokeStyle = '#202124';
    color.setAttribute('disabled', '');
}
function selectedPen(e) {
    e.preventDefault()
    if (selected == 'pen') return
    this.classList.add('active');
    eraser.classList.remove('active');
    selected = 'pen';
    context.strokeStyle = `${color.value}`;
    color.enabled = true;
    color.removeAttribute('disabled');
}