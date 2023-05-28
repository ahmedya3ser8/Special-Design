// Save Color In LocalStorage
let mainColor = localStorage.getItem("color_option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

let backgroundOption = true;
let backgroundInterval;

let backgroundLocalItem = localStorage.getItem("background_option");

// Remove Active Class From All Spans
if (backgroundLocalItem !== null) {
  document.querySelectorAll(".random-backgrounds span").forEach(element => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    backgroundOption = false;
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

// Click On Toggle Settings Icon
document.querySelector(".toggle-settings i").onclick = function() {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
}

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    localStorage.setItem("color_option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

const randomBackground = document.querySelectorAll(".random-backgrounds span");
randomBackground.forEach(span => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// Random Background Images
let landingPage = document.querySelector(".landing-page");
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      let randomImag = Math.floor(Math.random() * imagesArray.length);
      landingPage.style.backgroundImage = 'url("imgs/' + imagesArray[randomImag] + '")';
    }, 10000);
  }
}

randomizeImgs();

// Animate Skills Width

let ourSkills = document.querySelector(".our-skills");
let spansProg = document.querySelectorAll(".our-skills .skill-progress span");

window.onscroll = function() {
  if (window.scrollY >= ourSkills.offsetTop - 150) {
    spansProg.forEach(span => {
      span.style.width = span.dataset.progress;
    })
  }
}