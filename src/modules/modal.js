const modal = () => {
    let popUpBtn = document.querySelectorAll('.popup-btn');
    let popUpClose = document.querySelector('.popup-close');

    let popup = document.querySelector('.popup');                           //popup
    let popupContent = document.querySelector('.popup-content');            //popupContent

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


    popUpBtn.forEach(elem => {                                            // супер!!! потренироваться писать такой код
        elem.addEventListener('click', () => {
            if (screen.width >= 768) {
                idAnimation = requestAnimationFrame(popupAnimation)
            }
            // else {
            //     cancelAnimationFrame(idAnimation)
            // }
            popup.style.display = 'block'
        })
    });

    popUpClose.addEventListener('click', () => {
        popup.style.display = 'none'
    })
}

modal()

export default modal;
