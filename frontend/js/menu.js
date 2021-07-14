export default {
    
    menuToggle: (selectorMenu,menuToggle) => {
        let $menu=document.querySelector(selectorMenu)
        $menu.classList.toggle(menuToggle)
    }

}