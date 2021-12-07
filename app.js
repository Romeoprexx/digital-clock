function displayTime() {
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();

    const h = hours;
    const m = minutes;
    const s = seconds;

   document.getElementById('clock').innerHTML = h.toString().padStart(2,"0") + ":" +
   m.toString().padStart(2,"0") + ":" + s.toString().padStart(2, "0")
}
setInterval(displayTime, 1000);