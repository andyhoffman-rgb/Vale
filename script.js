console.log("SCRIPT LOADED");

// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");


const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// No button runs away
noBtn.addEventListener("mouseover", () => {
  const min = 150;
  const max = 300;

  const distance = Math.random() * (max - min) + min;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Yes button grows
let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
  yesScale += 0.3;

  yesBtn.style.position = "fixed";
  yesBtn.style.top = "50%";
  yesBtn.style.left = "50%";
  yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
});

// Yes clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "YIPPIEEE 💖";
  catImg.src = "cat dance.gif";

  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
});
