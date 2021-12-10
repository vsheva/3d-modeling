'use strict'
import {animate} from './helpers'


const modal = () => {
    let popUpBtn = document.querySelectorAll('.popup-btn');
    let popup = document.querySelector('.popup');
    let popupContent = document.querySelector('.popup-content');

    const showPopup = () => {
        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                // popupContent.style.top = (150 * progress) + "px"
                popupContent.style.opacity = progress

            }
        });

    }

    popUpBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            if (screen.width >= 768) {
                showPopup()
            }
            popup.style.display = 'block'
            document.body.style.overflow = "hidden"
            document.body.style.height = "100%"
        })
    });



    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains("popup-close")) {
            popup.style.display = 'none'
            document.body.style.overflow = 'auto';
            document.body.style.height = "auto";

        }
    })
}

modal()

export default modal;










//модалка выезжает сверху //

// const modal = () => {
//     let popUpBtn = document.querySelectorAll('.popup-btn');
//     let popup = document.querySelector('.popup');                           //popup
//     //let popUpClose = popup.querySelector('.popup-close');
//
//     let popupContent = document.querySelector('.popup-content');            //popupContent
//     let count = 0;
//     let idAnimation
//
//
//     let popupAnimation = () => {
//         idAnimation = requestAnimationFrame(popupAnimation)
//         count++;
//
//         if (count < 20) {
//             popupContent.style.top = count * 10 + "px"
//         } else {
//             cancelAnimationFrame(idAnimation)
//             count = 0;
//         }
//     }
//
//
//     popUpBtn.forEach(elem => {                                            // супер!!! потренироваться писать такой код
//         elem.addEventListener('click', () => {
//             if (screen.width >= 768) {
//                 idAnimation = requestAnimationFrame(popupAnimation)
//             }
//             popup.style.display = 'block'
//         })
//     });
//
//     // popUpClose.addEventListener('click', () => {
//     //     popup.style.display = 'none'
//     // })
//
//     popup.addEventListener('click', (e) => {
//         if(!e.target.closest('.popup-content') || e.target.classList.contains("popup-close")) {                 // не модалка, а null ------
//             popup.style.display = 'none'                                                                        // закрытие или в поле , или в крестик модальное окно
//         }
//     })
// }
//
// modal()
//
// export default modal;




