"use strict";

// defining the variables
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

//functions: To convert time(milliseconds) into date
//Function to update the clock
// Function to format the time(adding a zero in front of a single number)
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
////////////////////////////////////////////////////////////////////

//To fix: Saving the date entered after the click so that when write the new date it only changes the InnerHtml after the click on submit.

//next step saving the state of the page to the url to be able to send it------ Brainstorming
function save_new_state() {
  // a temp data object to serialize
  var data = {
    txt: text_input.value,
    num: number_input.value,
  };
  // serialize the data and save behind the url's #
  window.location.hash = serialize(data);
  // show the current url in a readonly text field
  url_input.value = window.location.toString();
}

// every time the page loads, see if some state came with it
function load_state() {
  // will hold data if there is any
  var data;
  // get the current url hash (behind the #)
  var url_hash = window.location.hash.substr(1);
  console.log("hash on page load is", url_hash); // debug in dev
  // check for and apply state if any is present
  if (url_hash !== undefined && url_hash !== "") {
    console.log("whoa"); // we found shit
    // try turning the hash string into data
    data = deserialize(url_hash);
    if (data === undefined) {
      return; // nope, nothing here
    }
    // do we see what we'd expect?
    if (data.txt !== undefined) {
      text_input.value = data.txt;
    }
    if (data.num !== undefined) {
      number_input.value = data.num;
    }
  }
  // update the url text field for dummies
  url_input.value = window.location.toString();
}

// on window load, try to load state
window.onload = load_state;
////////////////////////////////////////////////////////////////////////////////////////
if (window.location.hash) {
  // Fragment exists
} else {
  // Fragment doesn't exist
}
