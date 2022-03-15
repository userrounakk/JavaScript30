const word = "userrounakk";
var egg = document.querySelector('#egg');
var arr = [];
var won = false;

document.addEventListener('keyup', keyPress);



function keyPress(e) {
    let div;
    won ? div = document.querySelector('.hidden-02') : div = document.querySelector('.hidden-01');;
    div.style.display = "none";
    arr.push(e.key);
    if (arr.length > word.length) arr.shift();
    var checkWord = arr.join('');
    if (checkWord === word) showEgg();
}

function showEgg() {
    egg.style.display = "block"
    let top = String(getRandom(-10, 95)) + 'vh';
    let left = String(getRandom(-5, 95)) + 'vw';
    let rotate = String(getRandom(-360, 360)) + 'deg';
    egg.style.top = top;
    egg.style.left = left;
    egg.style.rotate = rotate;
    egg.addEventListener('click', completed);
    setTimeout(hideEgg, 1500)
}

function hideEgg() {
    egg.style.display = "none"
}

function completed() {
    egg.style.display = "none";
    won = getDecision();
    if (won) {
        document.querySelector('.hidden-02').style.display = "block";
    } else {
        document.querySelector('.hidden-01').style.display = "block"
    }

}

function getRandom(min, max) {
    var rand = Math.floor(Math.random() * (max - min));
    if (rand > max) {
        rand -= (max - min)
    }
    return rand
}

function getDecision() {
    var rand = Math.random();
    if (rand > 0.5) return true;
    return false;
}