const menu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const btnClose = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a');


    const handleMenu = () => {
        // //  menu.style.transform = `translateX(0)`                                                                              //открываем меню
        // if (!menu.style.transform /*|| menu.style.transform === `translateX(-100%) `*/) {                                       //menu.style.transform == false  //если это свойство отсутствует
        //     menu.style.transform = `translateX(0)`
        // } else {
        //     // menu.style.transform = `translateX(-100%)`
        //     menu.style.transform = ""                                                                                             //сбрасываем через пустую строку (не было изначально,те был как пустой),  а не как в 8-й строке
        // }

        menu.classList.toggle("active-menu")
    }

    btnMenu.addEventListener('click', handleMenu);
    btnClose.addEventListener("click", handleMenu);


    // for (let i = 0; i < menuItems.length; i++) {                                                                                     //вспомнили
    //     menuItems[i].addEventListener('click', handleMenu)
    // }
    menuItems.forEach((element) => {
        element.addEventListener('click', handleMenu)
    })

}

export default menu;
