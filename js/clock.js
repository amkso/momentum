const clock = document.querySelector("h2#clock");
const greeting = document.querySelector("#greeting");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;

    // another way
    // const date2 = new Date();
    // clock.innerText = date2.toLocaleTimeString("en-US",{hour12: false});
}

getClock();
setInterval(getClock, 1000);


const date = new Date();
const hours = date.getHours();

let greetingHours = '';
if ((5 <= hours) && (hours < 12)){
    greetingHours = 'morning';
} else if ((12 <= hours) && (hours < 20)){
    greetingHours = 'afternoon';
} else{
    greetingHours = 'evening';
}
greeting.innerText = `Good ${greetingHours}, ${localStorage.getItem(USERNAME_KEY)}.`;
