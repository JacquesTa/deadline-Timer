const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function convertToDays(milliSeconds) {
  let days = Math.floor(milliSeconds / (86400 * 1000));
  milliSeconds -= days * (86400 * 1000);
  let hours = Math.floor(milliSeconds / (60 * 60 * 1000));
  milliSeconds -= hours * (60 * 60 * 1000);
  let minutes = Math.floor(milliSeconds / (60 * 1000));
  milliSeconds -= minutes * (60 * 1000);
  let seconds = Math.floor(milliSeconds / 1000);
  milliSeconds -= Math.floor(milliSeconds / 1000);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateClock() {
  var today = new Date();
  var enteredDate = new Date(document.querySelector(".text").value);
  var timer = enteredDate.getTime() - today.getTime();

  let days = Math.floor(timer / (86400 * 1000));
  timer -= days * (86400 * 1000);
  let hours = Math.floor(timer / (60 * 60 * 1000));
  timer -= hours * (60 * 60 * 1000);
  let minutes = Math.floor(timer / (60 * 1000));
  timer -= minutes * (60 * 1000);
  let seconds = Math.floor(timer / 1000);
  timer -= Math.floor(timer / 1000);

  document.querySelector("#days").innerHTML = formatTime(days);
  document.querySelector("#hours").innerHTML = formatTime(hours);
  document.querySelector("#minutes").innerHTML = formatTime(minutes);
  document.querySelector("#seconds").innerHTML = formatTime(seconds);

  setInterval(updateClock, 1000);
}

document.querySelector(".submit-btn").addEventListener("click", updateClock);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById("form-c").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("subBtn").click();
  }
});
