const images = ["dj_max_01.png","dj_max_02.png","dj_max_03.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const url = `img/${chosenImage}`;

document.body.style.backgroundImage = "url("+url+")";
