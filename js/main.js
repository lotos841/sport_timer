const stop_wath_start_button = document.getElementById('stop-wath-start');
const stop_wath_reset_button = document.getElementById('stop-wath-reset');

const timer_milliseconds = document.getElementById('timer-milliseconds')
const timer_seconds = document.getElementById('timer-seconds')
const timer_minutes = document.getElementById('timer-minutes')

const minutes_input = document.getElementById('minutes-input')
const seconds_input = document.getElementById("seconds-input")
minutes_input.addEventListener('change',() => {
    minutes = minutes_input.value;
}) 
seconds_input.addEventListener('change',() => {
    seconds = seconds_input.value;
}) 

let stopWath_value = false;
let interval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;



stop_wath_start_button.addEventListener('click', e => {
    if(stopWath_value) {
        clearInterval(interval)
        stopWath_value = false;
    }
    else {
        if(minutes != 0 || seconds != 0) {
            interval = setInterval(stopWatchStart, 10)
            stopWath_value = true;
        }
        
    }
    e.preventDefault()
})

stop_wath_reset_button.addEventListener('click', e => {
    clearInterval(interval)
    milliseconds = 0; 
    seconds = 0; 
    minutes = 0;
    timer_milliseconds.textContent = milliseconds;
    timer_seconds.textContent = seconds;
    timer_minutes.textContent = minutes;
    e.preventDefault();
})

function stopWatchStart() {
    if (milliseconds > 0) {
        milliseconds--;
    }
    else {
        if (seconds > 0) {
            seconds--;
        }
        else {
            minutes--;
            seconds = 59;
        }
        
        milliseconds = 99;
    }
    timer_milliseconds.textContent = milliseconds;
    timer_seconds.textContent = seconds;
    timer_minutes.textContent = minutes;

}