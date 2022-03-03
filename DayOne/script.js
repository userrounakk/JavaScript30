document.addEventListener('keydown', playSound);
var playKeys = document.querySelectorAll('.drum-pad');
playKeys.forEach(key => key.addEventListener('transitionend', removeEffect));

function playSound(e) {
    var key = document.querySelector(`.drum-pad[key-code="${e.keyCode}"]`);
    var audio = document.querySelector(`audio[key-code="${e.keyCode}"]`);
    if (key == null) return;
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
}
function clicked(keyCode) {
    var key = document.querySelector(`.drum-pad[key-code="${keyCode}"]`);
    var audio = document.querySelector(`audio[key-code="${keyCode}"]`);
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
}
function removeEffect(e) {
    e.target.classList.remove('playing');
}



