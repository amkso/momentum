const images = [
    "0.jpg", "1.jpg", "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `background_imgs//${chosenImage}`;
bgImage.draggable = false;
bgImage.classList.add("background");
document.body.appendChild(bgImage);
draggable="false"