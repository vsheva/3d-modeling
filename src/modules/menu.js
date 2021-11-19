const menu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const toggleMenu = () => {
        menu.classList.toggle("active-menu")
    }

    btnMenu.addEventListener('click', toggleMenu);

    menu.addEventListener("click", (e) => {
        if (e.target.matches(".close-btn")) {
            toggleMenu();
        } else if (e.target.matches("ul>li>a")) {
            toggleMenu();
        }
    })
}

export default menu;
