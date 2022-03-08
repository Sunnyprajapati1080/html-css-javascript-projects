const clock = document.getElementsByClassName("child_container")[0];
const stopwatch = document.getElementsByClassName("child_container")[1];
const show_stopwatch = document.getElementsByClassName("child_container")[1].children[0];
const clockbtn = document.querySelectorAll(".container > button")[0];
const startbtn = document.querySelectorAll(".actions button")[1];
const stopbtn = document.querySelectorAll(".actions button")[0];
const resetbtn = document.querySelectorAll(".actions button")[2];
const stopwatchbtn = document.querySelectorAll(".container > button")[1];

function onClock() {
    const clr = setInterval(() => {
        let show_time = document.getElementById("time");
        let show_date = document.getElementById("date");
        let getTime = new Date();
        let time = getTime.toLocaleTimeString()
        let date = getTime.toLocaleDateString()
        show_time.innerHTML = time;
        show_date.innerHTML = date;
    }, 1000)
    return clr
}

const clr = onClock();
clockbtn.addEventListener("click", () => {
    clock.style.display = "block";
    stopwatch.style.display = "none";
    onClock();
})
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
stopwatchbtn.addEventListener("click", () => {
    stopwatch.style.display = "block";
    clock.style.display = "none";
    clearInterval(clr)
    show_stopwatch.innerHTML = `${hours.toString().length==1 ? "0"+hours:hours}:${minutes.toString().length==1 ? "0"+minutes:minutes}:${seconds.toString().length==1 ? "0"+seconds:seconds}:${milliseconds.toString().length==1 ? "0"+milliseconds:milliseconds}`
})
let interval_on = false;
startbtn.addEventListener("click", () => {
    if (interval_on == false) {
        clearWatch = setInterval(() => {
            interval_on = true;
            if (milliseconds == 100) {
                milliseconds = 0;
                seconds++
            }
            if (seconds == 60) {
                seconds = 0;
                minutes++
            }
            if (minutes == 60) {
                minutes = 0;
                hours++
            }
            show_stopwatch.innerHTML = `${hours.toString().length==1 ? "0"+hours:hours}:${minutes.toString().length==1 ? "0"+minutes:minutes}:${seconds.toString().length==1 ? "0"+seconds:seconds}:${milliseconds.toString().length==1 ? "0"+milliseconds:milliseconds}`
            milliseconds++
        }, 10);
    }
})
stopbtn.addEventListener("click", () => {
    clearInterval(clearWatch)
    interval_on = false;
})
resetbtn.addEventListener("click", () => {
    clearInterval(clearWatch)
    interval_on = false;
    hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
    show_stopwatch.innerHTML = `${hours.toString().length==1 ? "0"+hours:hours}:${minutes.toString().length==1 ? "0"+minutes:minutes}:${seconds.toString().length==1 ? "0"+seconds:seconds}:${milliseconds.toString().length==1 ? "0"+milliseconds:milliseconds}`
})