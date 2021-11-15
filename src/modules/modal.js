const modal = () => {
    let popUpBtn = document.querySelectorAll('.popup-btn');
    let popup = document.querySelector('.popup');                           //popup
    let popUpClose = popup.querySelector('.popup-close');

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
        }
    }


    popUpBtn.forEach(elem => {                                            // супер!!! потренироваться писать такой код
        elem.addEventListener('click', () => {
            if (screen.width >= 768) {
                requestAnimationFrame(popupAnimation)
            }
            popup.style.display = 'block'
        })
    });

    popUpClose.addEventListener('click', () => {
        popup.style.display = 'none'
    })
}

modal()

export default modal;
