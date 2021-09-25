
let menu = document.querySelector(".left-panel");

function showMenu() {

  if (menu.style.display == "none") {
    menu.style.display = "flex";

  } else {
    menu.style.display = "none";
  }
}