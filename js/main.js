// Save Color In LocalStorage
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
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
    localStorage.setItem("color-option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// Random Background Images
let landingPage = document.querySelector(".landing-page");
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  let randomImag = Math.floor(Math.random() * imagesArray.length);
  landingPage.style.backgroundImage = 'url("imgs/' + imagesArray[randomImag] + '")';
}, 10000);