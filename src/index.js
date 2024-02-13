import "normalize.css";
import "./style.css";

import waiting from "./waiting.gif";
import success from "./success2.gif";
import fail from "./fail.gif";
import crying from "./crying.gif";

// initial load
const img = document.querySelector("img");
img.src = waiting;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
if (/Mobi|Android/i.test(navigator.userAgent)) {
  document.querySelector("body").innerHTML =
    "<h1>Зайдите с компьютера, пожалуйста) ♡</h1><img>";
  document.querySelector("img").src = crying;
}

function shePressedYes() {
  const header = document.querySelector("h1");
  header.textContent = "Урааааа!";

  img.src = success;

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
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
