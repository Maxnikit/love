import "normalize.css";

import "./heart.css";
import "./style.css";
import waiting from "./waiting.gif";
import success from "./success2.gif";
import fail from "./fail.gif";
import crying from "./crying.gif";

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const img = document.querySelector("img");
const hearts = document.querySelectorAll(".heart");
function toggleHearts() {
  hearts.forEach((heart) => {
    heart.classList.toggle("heart");
  });
}
function initialLoad() {
  img.src = waiting;

  if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.querySelector("body").innerHTML =
      "<h1>Зайди с компьютера, пожалуйста) ♡</h1><img>";
    document.querySelector("img").src = crying;
  }
  toggleHearts();
}

function shePressedYes() {
  const header = document.querySelector("h1");
  header.textContent = "Урааааа!";

  img.src = success;

  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  toggleHearts();
}

function shePressedNo() {
  const header = document.querySelector("h1");
  header.textContent = "Ну ты дааа...";

  img.src = fail;

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
}

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = `${Math.ceil(Math.random() * 90)}%`;
  noBtn.style.top = `${Math.ceil(Math.random() * 90)}%`;
  console.log(noBtn.innerHTML);
});
noBtn.addEventListener("click", () => {
  noBtn.innerHTML = "Всё равно Да!";
  shePressedNo();
});

yesBtn.addEventListener("click", () => {
  shePressedYes();
});

initialLoad();
