let clock = document.getElementById("clock");
let alarmTime = document.getElementById("alarm-time");
let alarmButton = document.getElementById("set-alarm");
let stopAlarm = document.getElementById("stop-alarm");
let alarmInterval;

// Function to update the clock every second
function updateTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  clock.innerText = time;
}

// Set interval to update the clock every second
setInterval(updateTime, 1000);

//Function to set the alarm
alarmButton.addEventListener("click", function() {
  let alarm = new Date("January 01, 2000 " + alarmTime.value);
  let currentTime = new Date();
  let timeUntilAlarm = alarm.getTime() - currentTime.getTime();

  alarmInterval = setTimeout(function() {
    alert("Time's up!");
  }, timeUntilAlarm);
});

//Function to stop the alarm
stopAlarm.addEventListener("click", function() {
  clearTimeout(alarmInterval);
});