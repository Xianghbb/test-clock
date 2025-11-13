function updateTime() {
    const now = new Date();

    // 获取时间
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 获取日期
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekDay = weekDays[now.getDay()];

    // 更新显示
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${year}-${month}-${day} ${weekDay}`;
}

// 立即更新时间
updateTime();

// 每秒更新一次时间
setInterval(updateTime, 1000);
