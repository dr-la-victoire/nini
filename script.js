// This program runs a countdown to Valentine's Day!

// Target for Valentine's Day
const timer = setInterval(() => {
  let valentinesDay = new Date("February 14, 2025 09:00:00");

  // Today's date
  let now = new Date();

  // Doing the arithmetic
  let countDown = valentinesDay - now;

  // condition for when the timer expires
  if (countDown <= 0) {
    clearInterval(timer);
    document.querySelector(".countdown-timer").style.backgroundColor =
      "transparent";
    document.querySelector(".countdown-timer").innerHTML =
      `<button onclick="window.location.href='poem.html'">Click Me!</button>`;
  }

  // Conversions
  let seconds = Math.floor((countDown / 1000) % 60);
  let minute = Math.floor((countDown / 1000 / 60) % 60);
  let hour = Math.floor((countDown / 1000 / 60 / 60) % 24);
  let day = Math.floor(countDown / (1000 * 60 * 60 * 24));

  // Display in HTML
  if (day !== 1) {
    document.getElementById("days").innerHTML = `${day} days`;
  } else {
    document.getElementById("days").innerHTML = `${day} day`;
  }
  if (hour !== 1) {
    document.getElementById("hours").innerHTML = `${hour} hours`;
  } else {
    document.getElementById("hours").innerHTML = `${hour} hour`;
  }

  if (minute !== 1) {
    document.getElementById("minutes").innerHTML = `${minute} minutes`;
  } else {
    document.getElementById("minutes").innerHTML = `${minute} minute`;
  }

  if (seconds !== 1) {
    document.getElementById("seconds").innerHTML = `${seconds} seconds`;
  } else {
    document.getElementById("seconds").innerHTML = `${seconds} second`;
  }
}, 1000);
