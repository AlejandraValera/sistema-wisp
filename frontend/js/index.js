import Menu from "./menu.js"



document.addEventListener("click",e => {
    // e.preventDefault()
    // condición del menu
    if(e.target.matches(".icon-menu") || e.target.matches(".icon-menu *")){
        Menu.menuToggle(".menu","menu-cerrar")
    }

})