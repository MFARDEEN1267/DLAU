// Set your target end date here (YYYY-MM-DDTHH:MM:SS)
const targetDate = new Date("2026-12-18T23:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    // Time calculations
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  

    // Update HTML elements with leading zeroes
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  } else {
    // Message when countdown finishes
    document.getElementById("countdown").innerHTML = "<h2>Event Started!</h2>";
  }
}

// Run immediately, then update every second (1000ms)
updateCountdown();
setInterval(updateCountdown, 1000);