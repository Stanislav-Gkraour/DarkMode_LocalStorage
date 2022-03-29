// Selectioner les elemetn necessaires (Bouton et Span )

let bouton = document.querySelector("#mode");
let span = document.querySelector("span");
let myBody = document.body;

if (localStorage.getItem("theme") === "sombre") {
  modeSombre();
}

function modeSombre() {
  myBody.className = "dark";
  span.textContent = "Thème clair";
  localStorage.setItem("theme", "sombre");
}


bouton.addEventListener("click", () => {
  if (myBody.classList.contains("dark")) {
    localStorage.setItem("theme", "clair");
    myBody.classList = "";
    span.textContent = "Thème sombre";
  } else {
    modeSombre();
  }
});

//  .contains pour variefie si la classe "dark" est deja presente
