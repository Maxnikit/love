import "normalize.css";
import "./style.css";

const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function () {
  noBtn.style.left = `${Math.ceil(Math.random() * 90)}%`;
  noBtn.style.top = `${Math.ceil(Math.random() * 90)}%`;
  console.log(noBtn.innerHTML);
});
noBtn.addEventListener("click", function () {
  noBtn.innerHTML = "Всё равно Да!";
  shePressedNo();
});

const yesBtn = document.getElementById("yesBtn");
yesBtn.addEventListener("click", function () {
  shePressedYes();
});

function shePressedYes() {
  const header = document.querySelector("h1");
  header.textContent = "Урааааа!";

  const img = document.querySelector("img");
  img.src = "success.gif";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
}

function shePressedNo() {
  const header = document.querySelector("h1");
  header.textContent = "Ну ты дааа...";

  const img = document.querySelector("img");
  img.src = "fail.gif";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
}
