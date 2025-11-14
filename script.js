function updateTime() {
    const now = new Date();

    // Get time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Get date
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekDay = weekDays[now.getDay()];

    // Update display
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${year}-${month}-${day} ${weekDay}`;
}

// Update time immediately
updateTime();

// Update time every second
setInterval(updateTime, 1000);
