const modal = () => {
    let popUpBtn = document.querySelectorAll('.popup-btn');
    let popup = document.querySelector('.popup');
    //let popUpClose = popup.querySelector('.popup-close');

    let popupContent = document.querySelector('.popup-content');
    let count = 0;
    let idAnimation


    let popupAnimation = () => {
        idAnimation = requestAnimationFrame(popupAnimation)
        count++;

        if (count < 50) {
            popupContent.style.top = count * 2 + "px"
        } else {
            cancelAnimationFrame(idAnimation)
            count = 0;
        }
    }


    popUpBtn.forEach(elem => {                                            // !!!
        elem.addEventListener('click', () => {
            if (screen.width >= 768) {
                idAnimation = requestAnimationFrame(popupAnimation)
            }
            popup.style.display = 'block'
        })
    });

    // popUpClose.addEventListener('click', () => {
    //     popup.style.display = 'none'
    // })

    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains("popup-close")) {                 // не модалка, а null ------
            popup.style.display = 'none'                                                                        // закрытие или в поле , или в крестик модальное окно
        }
    })

}

modal()

export default modal;

