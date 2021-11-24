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
        })
    });


    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains("popup-close")) {
            popup.style.display = 'none'
        }
    })
}

modal()

export default modal;
































































































// import {animate} from './helpers'
//
//
// const modal = () => {
//     let popUpBtn = document.querySelectorAll('.popup-btn');
//     let popup = document.querySelector('.popup');
//     let popupContent = document.querySelector('.popup-content');
//     let count = 0;
//     let idAnimation
//
//
//     let popupAnimation = () => {
//         idAnimation = requestAnimationFrame(popupAnimation)
//         count++;
//
//         if (count < 50) {
//             popupContent.style.top = count * 2 + "px"
//         } else {
//             cancelAnimationFrame(idAnimation)
//             count = 0;
//         }
//     }
//
//
//     popUpBtn.forEach(elem => {
//         elem.addEventListener('click', () => {
//             if (screen.width >= 768) {
//                 idAnimation = requestAnimationFrame(popupAnimation)
//             }
//             popup.style.display = 'block'
//         })
//     });
//
//
//     popup.addEventListener('click', (e) => {
//         if (!e.target.closest('.popup-content') || e.target.classList.contains("popup-close")) {
//             popup.style.display = 'none'
//         }
//     })
//
//
//
// }
//
// modal()
//
// export default modal;
//
