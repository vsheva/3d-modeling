"use strict"

const menu = () => {
    let menu = document.querySelector('menu')
    let toggleMenu = () => {
        menu.classList.toggle('active-menu')
    }


    document.body.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest(".menu") || target.closest(".close-btn") || target.closest("li a")) {
            toggleMenu()
        } else if (!target.closest("menu") && menu.classList.contains("active-menu")) {
            menu.classList.toggle('active-menu')
        }
    })


    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            const blockId = anchor.getAttribute('href')
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
}


export default menu;










