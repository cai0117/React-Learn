const turn = document.querySelector(".turn");
const transform = document.querySelector(".transform");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const blades = document.querySelector(".blades");
const container = document.querySelector(".container");

turn.addEventListener("click", () => {
  blades.classList.toggle("active");
  const hasTurn = !blades.classList.contains("active");
  if (hasTurn) blades.style.animationDuration = "1s";
  hasTurn && container.classList.remove("active");
  hasTurn && blades.classList.remove("active");
});
transform.addEventListener("click", () => {
  const hasTurn = blades.classList.contains("active");
  hasTurn && container.classList.toggle("active");
});
up.addEventListener("click", () => {
  const hasTurn = blades.classList.contains("active");
  if (hasTurn) blades.style.animationDuration = ".3s";
});
down.addEventListener("click", () => {
  const hasTurn = blades.classList.contains("active");
  if (hasTurn) blades.style.animationDuration = ".1s";
});
