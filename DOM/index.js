// Bai 6
var btnBlue = document.querySelector(".js-btn-blue")
var btnRed = document.querySelector(".js-btn-red")
btnBlue.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
})
btnRed.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
})

// Bai 10

var btnShow = document.getElementById("js-btn-show")
var content = document.querySelector("#content")
var textContent = content.textContent
var lengthContent = textContent.length
var text = textContent.slice(0,95) + '...';
btnShow.style.display = lengthContent > 100 ? 'block' : 'none';

btnShow.addEventListener("click", function () {
   if(btnShow.innerText == 'Show More') {
       btnShow.innerText = 'Show Less';
       content.innerText = textContent;
   }
   else{
        btnShow.innerText = 'Show More';
        content.innerText = text;
   }
})



// Bai 13
var btnStart = document.querySelector(".js-btn-start")
var btnStop = document.querySelector(".js-btn-stop")
var btnReset = document.querySelector(".js-btn-reset")

var minute = document.getElementById("minute")
var seconds = document.getElementById("second")
var miliSeconds = document.getElementById("miliSecond")

function startTime() {
    ms++;
    if (ms < 10) {
        miliSeconds.innerHTML = "0" + ms;
    }
    if (ms >= 10) {
        miliSeconds.innerHTML = ms;
    }
    if (ms == 100) {
        s++;
        miliSeconds.innerText = '00';
        ms = 0;
    }
    if (s < 10) {
        seconds.innerHTML = "0" + s;
    }
    if (s >= 10) {
        seconds.innerHTML = s;
    }
     if (s == 60) {
        m++;
        seconds.innerText = '00';
        minute.innerText = m < 10 ? '0' + m : m;
        s = 0;
    }
}

var Interval;
var m = 0;
var s = 0;
var ms = 0;

btnStart.addEventListener("click", function () {
    Interval = setInterval(startTime, 10)
})

btnStop.addEventListener("click", function () {
    clearInterval(Interval)
})

btnReset.addEventListener("click", function () {
    clearInterval(Interval)
    minute.innerHTML = '00';
    seconds.innerHTML = '00';
    miliSeconds.innerHTML = '00';
})
