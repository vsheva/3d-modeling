const validate = () => {

    const calcSquare = document.querySelector(".calc-square")
    const calcCount = document.querySelector(".calc-count")
    const calcDay = document.querySelector(".calc-day")



    calcSquare.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })

    calcCount.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })

    calcDay.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })


    let validFormText = () => {
        const formText = document.querySelector(".mess")
        formText.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^а-я\-\s]/gi, '');
        })
    }
    validFormText();


    let validFormName = () => {
        let formName = document.querySelectorAll('[placeholder="Ваше имя"]')
        formName.forEach(element => {
            element.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^а-я\-\s]/gi, '');
            })
        })
    }
    validFormName();


    let validFormEmail = () => {
        let formEmail = document.querySelectorAll('[placeholder="E-mail"]');
        formEmail.forEach(element => {
            element.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^a-z\@\_\.\!\~\*\'\-]/gi, '');
            })
        })
    }
    validFormEmail()


    let validFormPhone = () => {
        let formPhone = document.querySelectorAll('input[type="tel"]')
        console.log(formPhone)
        formPhone.forEach(element => {
            element.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^\d\(\)\-]/gi, '');
            })
        })
    }
    validFormPhone();
}


export default validate;