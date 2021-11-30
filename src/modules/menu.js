const menu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const btnClose = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a');


    const handleMenu = () => {
        // //  menu.style.transform = `translateX(0)`
        // if (!menu.style.transform /*|| menu.style.transform === `translateX(-100%) `*/) {                                       //menu.style.transform == false  //если это свойство отсутствует
        //     menu.style.transform = `translateX(0)`
        // } else {
        //     // menu.style.transform = `translateX(-100%)`
        //     menu.style.transform = ""                                                                                             //сбрасываем через пустую строку (не было изначально,те был как пустой)
        // }

        menu.classList.toggle("active-menu")
    }

    btnMenu.addEventListener('click', handleMenu);
    btnClose.addEventListener("click", handleMenu);


    // for (let i = 0; i < menuItems.length; i++) {                                                                                     //!
    //     menuItems[i].addEventListener('click', handleMenu)
    // }



    menuItems.forEach((element) => {

        element.addEventListener('click', handleMenu)
    })


        // плавный скролл и плавный скролл на кнопке

    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e)=>{
            e.preventDefault();

            const blockId = anchor.getAttribute('href')
            document.querySelector(''+ blockId).scrollIntoView({
                behavior:"smooth",
                block:"start"
            })

        })
    }

}










export default menu;
