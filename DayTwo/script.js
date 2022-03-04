var secHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

var digiSec = document.querySelector('.sec');
var digiMin = document.querySelector('.min');
var digiHour = document.querySelector('.hour');

var day = document.querySelector('.day');
var date = document.querySelector('.date');

var today = new Date();
const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursady', 'Friday', 'Saturday'];
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
day.innerHTML = Days[today.getDay()];
date.innerHTML = `${Months[today.getMonth()]}, ${today.getDate()}`

function changeTime() {
    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours();

    var secDeg = sec * 6 + 90;
    var minDeg = min * 6 + 90;
    var hourDeg = hour * 30 + 90 + min * 0.5;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    digiSec.innerHTML = sec;
    digiMin.innerHTML = min;
    digiHour.innerHTML = hour;
}
setInterval(changeTime, 1000)

console.log(sec)
console.log(min)