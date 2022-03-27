document.querySelector('#calculate').addEventListener('click', calculateAndDisplayTime);
var showTime = document.querySelector('#show-time');
function calculateAndDisplayTime(e) {
    e.preventDefault();
    calculateTime()
    setInterval(calculateTime, 1000)
}
function calculateTime() {
    var time = document.querySelector('#time-field').value;
    var now = new Date();
    var [nowHr, nowMin, nowSec] = [now.getHours(), now.getMinutes(), now.getSeconds()];
    var [hr, min] = time.split(':').map(parseFloat);
    var currentTimeInSec = nowHr * 3600 + nowMin * 60 + nowSec;
    var givenTimeInSec = hr * 3600 + min * 60;
    var secLeft = currentTimeInSec >= givenTimeInSec ? givenTimeInSec - currentTimeInSec + 24 * 3600 : givenTimeInSec - currentTimeInSec;
    var hrLeft = Math.floor(secLeft / 3600);
    secLeft = secLeft % 3600;
    var minLeft = Math.floor(secLeft / 60);
    secLeft = secLeft % 60;
    showTime.innerHTML = `${hrLeft} : ${minLeft} : ${secLeft}`
}