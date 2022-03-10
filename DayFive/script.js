var images = document.querySelectorAll('.image');
images.forEach(image => image.addEventListener('click', toggleOpen));
var act;

function toggleOpen(e) {
    if (this.classList.length > 2) {
        this.classList.remove('active');
    } else if (document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active');
        this.classList.toggle('active');
    } else {
        this.classList.toggle('active');
    };
}
