
let menu = document.querySelector(".left-panel");
let modal = document.querySelector("#modal");

  function abrirModal() {
    modal.style.display = "flex";
  }

  function fecharModal() {
    modal.style.display = "none";
  }

function showMenu(){

    if(menu.style.display == "none"){
        menu.style.display = "flex";   

    }else{
        menu.style.display = "none";
    } 
}