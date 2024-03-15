let timer;
let isRunning = false;
let time = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            time++;
            displayTime();
        }, 1000);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    time = 0;
    displayTime();
    clearLaps();
}

function displayTime() {
    document.getElementById('display').textContent = formatTime(time);
}

function formatTime(time) {
    const date = new Date(time * 1000);
    return date.toISOString().substr(11, 8);
}

function lapTime() {
    const lapTime = formatTime(time);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    document.getElementById('laps').appendChild(lapItem);
}

function clearLaps() {
    const lapList = document.getElementById('laps');
    while (lapList.firstChild) {
        lapList.removeChild(lapList.firstChild);
    }
}

// Event Listeners
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTime);