const menu = () => {
    let menu = document.querySelector('menu')

    let toggleMenu = () => {
        menu.classList.toggle('active-menu')
    }


    document.body.addEventListener('click', (e) => {
        let target = e.target;

        // cобытие на значок меню, крестик и на элементы списка меню
        if (target.closest(".menu") || target.closest(".close-btn") || target.closest("li a")) {
            toggleMenu()
        }
        // если клик мимо и меню активно
        else if (!target.closest("menu") && menu.classList.contains("active-menu")) {
            menu.classList.toggle('active-menu')
        }
    })
}


export default menu;















































































































// const menu = () => {
//     //let btnMenu = document.querySelector('.menu')
//     let menu = document.querySelector('menu')
//
//     let toggleMenu = () => {
//         menu.classList.toggle('active-menu')
//     }
//
//     // btnMenu.addEventListener('click',toggleMenu)
//     //
//     // menu.addEventListener('click', (e)=>{
//     //
//     //     if(e.target.matches(".close-btn")) {
//     //         toggleMenu()
//     //     } else if( e.target.matches("li a")) {
//     //         toggleMenu()
//     //     }
//     //
//     // })
//
//
//     document.body.addEventListener('click', (e) => {
//         let target = e.target;
//         // cобытие на значок меню, крестик и на элементы списка меню
//         if (target.closest(".menu") || target.closest(".close-btn") || target.closest("li a")) {
//             toggleMenu()
//         }
//         // если клик не в меню и оно активно
//         else if (!target.closest("menu") && menu.classList.contains("active-menu")) {
//             menu.classList.toggle('active-menu')
//         }
//     })
// }


export default menu;

















