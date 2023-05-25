// Random Background Images
let landingPage = document.querySelector(".landing-page");
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  let randomImag = Math.floor(Math.random() * imagesArray.length);
  landingPage.style.backgroundImage = 'url("imgs/' + imagesArray[randomImag] + '")';
}, 10000);