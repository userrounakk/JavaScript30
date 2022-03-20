const context = document.querySelector('.context');
const text = context.querySelector('h1');
const walk = 500; // 500px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = context;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,255,255,0.1)`;

}

context.addEventListener('mousemove', shadow);