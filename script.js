function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const day = now.getDate();
  const month = now.getMonth() + 1;

  // Format: "9 pm" (large hour, small "pm" or "am" to upper right)
  const displayHour = hour % 12 || 12;
  const isPM = hour >= 12;
  
  document.getElementById("hour").textContent = displayHour;
  document.getElementById("ampm").textContent = isPM ? "pm" : "am";
  
  // Display minute, second, day, month
  document.getElementById("line2").textContent = String(minute).padStart(2, "0");
  document.getElementById("line3").textContent = String(second).padStart(2, "0");
  document.getElementById("line4").textContent = String(day).padStart(2, "0");
  document.getElementById("line5").textContent = String(month).padStart(2, "0");
}

setInterval(updateClock, 1000);
updateClock();
