// calculate the time until the final blocks begins
function timeRemaining(end) {
    let total = Date.parse(end) - Date.parse(new Date());
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total, days, hours, minutes, seconds
    };
}

// run the timer with the given date 
function timer(end) {
    // find the remaining time
    let time = timeRemaining(end);

    // Display the countdown
    document.getElementById('days').textContent = time.days;
    document.getElementById('hours').textContent = time.hours;
    document.getElementById('minutes').textContent = time.minutes;
    document.getElementById('seconds').textContent = time.seconds;

    // once the countdown is over, stop the timer and display the messages
    if (time.total == 0) {
        clearInterval(countdown);
        document.getElementById('days').textContent = "You've got this!";
        document.getElementById('hours').style.display = 'none';
        document.getElementById('minutes').style.display = 'none';
        document.getElementById('seconds').style.display = 'none';
        document.getElementById('content-day').textContent = 'I';
        document.getElementById('content-hour').textContent = 'believe';
        document.getElementById('content-minutes').textContent = 'in';
        document.getElementById('content-seconds').textContent = 'you!';
    }
}

// start the timer with the given date 
function startTimer(end) {
    let countdown = setInterval(function() {
        timer(end);
    }, 1000);
    timer(end);
}

// assign the date that USask final block begins
// Adjust to the user's time zone
let finalDate = new Date(Date.UTC(2023, 11, 9, 00, 00, 0));

// Initiate the timer
startTimer(finalDate);
