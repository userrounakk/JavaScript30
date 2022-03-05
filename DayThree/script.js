var heading = document.querySelector('#heading');
var image = document.querySelector('#image');
var font_size = document.querySelector('#font-size');
var font_color = document.querySelector('#font-color');
var image_width = document.querySelector('#image-width');

font_size.addEventListener('change', fontSizeChange);
font_color.addEventListener('change', fontColorChange);
image_width.addEventListener('change', imageWidthChange);



function fontSizeChange(e) {
    heading.style.setProperty('--font-size', `${this.value}vw`)
}
function fontColorChange(e) {
    heading.style.setProperty('--heading-color', `${this.value}`)
}
function imageWidthChange(e) {
    image.style.setProperty('--image-width', `${this.value}%`)
}
