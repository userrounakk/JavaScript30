var images = document.querySelectorAll('.image');
images.forEach(image => image.addEventListener('click', toggleOpen));
var act;

function toggleOpen(e) {
    (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : null;
    this.classList.toggle('active')
}
