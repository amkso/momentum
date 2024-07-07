const clock = document.querySelector("h2#clock");

function getClock() {
    // const date = new Date();
    // const hours = String(date.getHours()).padStart(2, "0");
    // const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = `${hours}:${minutes}:${seconds}`;

    // another way
    const date2 = new Date();
    clock.innerText = date2.toLocaleTimeString("en-US",{hour12: false});
}

getClock();
setInterval(getClock, 1000);