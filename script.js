function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// Para dispositivos de escritorio
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// Para dispositivos móviles (touch)
moveRandom.addEventListener("touchstart", function (e) {
  moveRandomEl(e.target);
  e.preventDefault(); // Evita que se registre el evento de toque adicional
});

