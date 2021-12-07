const formValidation = () => {


    let validFormText = () => {
        //const formText = document.querySelector(".mess")
        const formText = document.querySelector("input[name='user_message']")
        formText.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^а-я\d\s\,\.\!\-\:\;\"\?]/gi, '');
        })
    }
    validFormText();


    let validFormName = () => {
        let formName = document.querySelectorAll("input[name='user_name']")
        formName.forEach(element => {
            element.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^а-я\s]/gi, '');
            })
        })
    }
    validFormName();


    let validFormEmail = () => {
        let formEmail = document.querySelectorAll('.form-email');
        formEmail.forEach(element => {
            element.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^a-z\@\_\.\!\~\*\'\-]/gi, '');
            })
        })
    }
    validFormEmail()


    let validFormPhone = () => {
        let formPhone = document.querySelectorAll('input[name="user_phone"]')
        formPhone.forEach(element => {
            element.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^\d\(\)\+\-]/gi, '');
            })
        })
    }
    validFormPhone()


}

export default formValidation;