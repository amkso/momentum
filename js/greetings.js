const loginForm = document.querySelector(".login-form_none");
const loginInput = document.querySelector(".login-form_none input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function toggleHiddens() {
    loginForm.classList.toggle('login-form_none');
    loginForm.classList.toggle('login-form_flex');
    document.querySelector("header").classList.toggle(HIDDEN_CLASSNAME);
    document.querySelector("main").classList.toggle(HIDDEN_CLASSNAME);
    document.querySelector("footer").classList.toggle(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    toggleHiddens();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    toggleHiddens();
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}