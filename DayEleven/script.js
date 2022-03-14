/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */

function keyUp(e) {
    if (e.keyCode == 32) return togglePlay();
    if (e.keyCode == 39) return buttonSkip(15);
    if (e.keyCode == 37) return buttonSkip(-15);
    if (e.keyCode == 38) return changeVolumne(0.05);
    if (e.keyCode == 40) return changeVolumne(-0.05);
    console.log(e.keyCode);
    return
}

function togglePlay() {
    video.paused ? video["play"]() : video["pause"]();
}
function updateButton() {
    this.paused ? toggle.textContent = '►' : toggle.textContent = '❚ ❚';
}
function skip() {
    video.currentTime += Number(this.dataset.skip);
}
function buttonSkip(time) {
    video.currentTime += time;
}
function changeVolumne(vol) {
    var currentVol = parseFloat(document.querySelector('#vol').value);
    if (currentVol == 1 && vol == 0.05 || currentVol == 0 && vol == -0.05) return;
    document.querySelector('#vol').value = currentVol + vol;
    video['volume'] = currentVol + vol;
}
function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
window.addEventListener('keyup', keyUp)

