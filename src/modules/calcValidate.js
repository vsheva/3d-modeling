const calcValidate = () => {

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


}


export default calcValidate;
























// эти проверки перенесли в formValidation

// let validFormText = () => {
//     const formText = document.querySelector(".mess")
//     //const formText = document.querySelector("input[name='user_message']")
//     formText.addEventListener("input", (e) => {
//         e.target.value = e.target.value.replace(/[^а-я\-\s]/gi, '');
//         //e.target.value = e.target.value.replace(/[^а-я\d\s\,\.\!\-\:\;\"\?]/gi, '');
//     })
// }
// validFormText();
//
//
// let validFormName = () => {
//     let formName = document.querySelectorAll('[placeholder="Ваше имя"]')
//     //let formName = document.querySelectorAll("input[name='user_name']")
//     formName.forEach(element => {
//         element.addEventListener("input", (e) => {
//             e.target.value = e.target.value.replace(/[^а-я\s]/gi, '');
//         })
//     })
// }
// validFormName();
//
//
// let validFormEmail = () => {
//     let formEmail = document.querySelectorAll('.form-email');
//     formEmail.forEach(element => {
//         element.addEventListener("input", (e) => {
//             e.target.value = e.target.value.replace(/[^a-z\@\_\.\!\~\*\'\-]/gi, '');
//         })
//     })
// }
// validFormEmail()
//
//
// let validFormPhone = () => {
//     let formPhone = document.querySelectorAll('input[type="tel"]')
//     //let formPhone = document.querySelectorAll('input[name="user_phone"]')
//     formPhone.forEach(element => {
//         element.addEventListener("input", (e) => {
//             e.target.value = e.target.value.replace(/[^\d\(\)\-]/gi, '');
//         })
//     })
// }
// validFormPhone();
