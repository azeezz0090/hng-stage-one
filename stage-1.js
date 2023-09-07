function currentTime() {
    const dayOfWeek = new Date().toLocaleDateString('en-US',{
        weekday: 'long'
    })

    const utcTime = new Date().toLocaleTimeString();

    document.querySelector('[data-testid = "currentDayOfThWeek"]').textContent = dayOfWeek;
    document.querySelector('[data-testid="currentTime"]').textContent = utcTime;
}

setInterval(currentTime, 1000);