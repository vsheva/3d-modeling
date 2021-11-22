const slider = () => {

    const sliderBlock = document.querySelector(".portfolio-content");
    const slides = document.querySelectorAll(".portfolio-item")
    let dots = document.querySelectorAll(".dot")
    const portfolioDots = document.querySelector(".portfolio-dots")



    const addDots = () => {

        for (let i = 0; i < slides.length; i++) {
            dots[i].classList.remove("dot")
            let newDot = document.createElement("li")
            newDot.classList.add("dot")
            if (i === 0) {
                newDot.classList.add("dot-active")
            }
            portfolioDots.append(newDot)
            dots = document.querySelectorAll(".dot")
        }
    }


    //dot-active
    const timerInterval = 2000 // создаем (потом заменяем)
    let currentSlide = 0
    let interval


    const prevSlide = (elements, index, strClass) => {
        elements[index].classList.remove(strClass);
    }
    const nexSlide = (elements, index, strClass) => {
        elements[index].classList.add(strClass);
    }


    const autoSlide = () => {
        prevSlide(slides, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }


        nexSlide(slides, currentSlide, "portfolio-item-active");
        nexSlide(dots, currentSlide, "dot-active");
    }


    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }


    const stopSlide = () => {
        clearInterval(interval);
    }
    sliderBlock.addEventListener("click", (e) => {
        e.preventDefault();

        if (!e.target.matches(".dot, .portfolio-btn")) {                                                                 //не имеет этого класса
            return
        }

        prevSlide(slides, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");
        if (e.target.matches("#arrow-right")) {
            currentSlide++
        } else if (e.target.matches("#arrow-left")) {
            currentSlide--
        } else if (e.target.classList.contains("dot")) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {                                                                                  //выучить
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {                                                                             // прокрутка по стрелке
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nexSlide(slides, currentSlide, "portfolio-item-active");
        nexSlide(dots, currentSlide, "dot-active");
    })

    // ограничитель
    sliderBlock.addEventListener("mouseenter", (e) => {                                                  //события на мышь
        if (e.target.matches(".dot, .portfolio-btn")) {                                                                     //
            stopSlide()                                                                                                    //когда наводим, то осанавливаем слайд
        }
    }, true)


    sliderBlock.addEventListener("mouseleave", (e) => {                                                 //события на мышь
        if (e.target.matches(".dot, .portfolio-btn")) {                                                                  //
            startSlide(timerInterval)                                                                                     //
        }
    }, true)
    // ограничитель
    addDots()
    startSlide(timerInterval);
}


export default slider
