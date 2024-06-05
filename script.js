document.addEventListener("DOMContentLoaded", function () {
  const startDate = new Date("2024-05-31T00:00:00").getTime();
  const endDate = new Date("2024-06-17T00:00:00").getTime();
  const totalDuration = endDate - startDate;
  const daysBetween = Math.floor(totalDuration / (1000 * 60 * 60 * 24));

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Время истекло";
    } else {
      const elapsed = totalDuration - distance;
      const progress = (elapsed / totalDuration) * 100;
      document.getElementById(
        "progress-marker"
      ).style.left = `calc(${progress}% - 20px)`;
    }
  }

  function createIntervals() {
    const intervalsContainer = document.getElementById("intervals");
    for (let i = 0; i <= daysBetween; i++) {
      const interval = document.createElement("div");
      interval.className = "interval";
      interval.style.left = `${(i / daysBetween) * 100}%`;
      intervalsContainer.appendChild(interval);
    }
  }

  createIntervals();

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to display the countdown immediately
});
