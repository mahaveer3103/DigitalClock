function updateClock() {
   
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hours').textContent = hours-12;

    document.getElementById('minutes').textContent = minutes;

    document.getElementById('seconds').textContent = seconds;
    
    let ampm = "AM";
    if (hours > 12) {
        ampm = "PM";
    }
    document.getElementById('ampm').textContent=ampm;



}


// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
