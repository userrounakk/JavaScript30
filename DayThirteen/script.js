function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var images = document.querySelectorAll('img');

document.addEventListener('scroll', debounce(scrolled));

function scrolled(e) {
    images.forEach(image => {
        var slideInAt = window.scrollY + window.innerHeight - image.height / 3;
        var bottomPoint = image.offsetTop + image.height;
        var reachedHalf = slideInAt > image.offsetTop;
        var toBeShown = window.scrollY < bottomPoint;


        if (reachedHalf && toBeShown) {
            image.classList.add('active');
        } else
            image.classList.remove('active')
    })
}