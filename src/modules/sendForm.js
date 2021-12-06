
'use strict';
const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #ffffff';
    //Функция отправки данных на сервер и обработки ответа
    const postData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    };
    const formSubmit = (target) => {
        target.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(target);
        target.reset();
        const removeMessage = () => {
            setTimeout(() => statusMessage.remove(), 5000);
        };
        const closePopUpSend = () => {
            setTimeout(() => {
                if (target.matches('#form3')) {
                    document.querySelector('.popup').style.display = 'none';
                }
            }, 5000);
        };
        postData(formData).then((response) => {
            if (response.status !== 200) {
                throw new Error('Status network not 200');
            }
            statusMessage.textContent = successMessage;
            removeMessage();
            closePopUpSend();
        }).catch(error => {
            statusMessage.textContent = errorMessage;
            console.error(error);
            removeMessage();
        });
    };
    document.body.addEventListener('submit', (event) => {
        event.preventDefault();
        if (event.target.querySelector('[placeholder~="E-mail"]').value.trim() !== '') {
            formSubmit(event.target);
        }
    });
};

export default sendForm;


































//По уроку
// const sendForm = ({formId, someElem = []}) => {
//     const form = document.getElementById(formId);
//     // оповещение
//     const statusBlock = document.createElement("div")
//     const loadText = 'Загрузка...'
//     const errorText = 'Ошибка...'
//     const successText = 'Спасибо! Наш менеджер с вами свяжется!'
//
//
//     const validate = (list) => {
//         let success = true;
//         list.forEach(input => {
//             if (!input.classList.contains("success")) {
//                 success = false;
//             } else {
//                 formValidate()
//             }
//         })
//         return success;
//
//     }
//
//
//     const sendData = (data) => {
//         return fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(res => res.json())
//     }
//
//     //////////submitForm
//     const submitForm = () => {
//         const formElements = form.querySelectorAll("input")
//         const formData = new FormData(form)
//         const formBody = {}
//
//         // оповещение
//         statusBlock.textContent = loadText
//         form.append(statusBlock)
//         //
//
//         formData.forEach((val, key) => {
//             formBody[key] = val
//         })
//
//         someElem.forEach(elem => {
//             const element = document.getElementById(elem.id)   //
//
//             if (elem.type === "block") {
//                 formBody[elem.id] = element.textContent
//             } else if (elem.type === "input") {
//                 formBody[elem.id] = element.value
//             }
//         })
//
//         /// проверка инпута на правильный ввод и на запрет ввода опред.символов
//
//
//         if (validate(formElements)) {
//             sendData(formBody)
//                 .then(data => {
//                     //оповещение
//                     statusBlock.textContent = successText
//
//                     formElements.forEach(input => {
//                         input.value = ''
//                     })
//                 })
//                 .catch(error => {
//                     statusBlock.textContent = errorText
//                 })
//         } else {
//             alert("Данные не валидны!")
//         }
//     }
// /////////////////////////////////
//
//
//     try {
//         if (!form) {
//             throw new Error("Верните форму на место, пожалуйста))")
//         }
//
//         form.addEventListener("submit", (event) => {
//             event.preventDefault()
//             submitForm()
//         })
//     } catch (error) {
//         console.error(error.message);
//     }
// }
//
// export default sendForm;
//
//












// Решение Милессы
// "use strict"
// const sendForm = () => {
//     const sendData = (data) => {
//         return fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {"Content-Type": "application/json"},
//         });
//     };
//     const submitForm = (form) => {
//         const statusMessage = document.createElement("div");
//         const showStatus = (status) => {
//             const statusList = {
//                 load: {message: "Загрузка...",},
//                 error: {message: "Что-то пошло не так...",},
//                 success: {message: "Спасибо. Наш менеджер скоро с вами свяжемся!",},
//             };
//             statusMessage.textContent = statusList[status].message;
//         };
//         statusMessage.style.cssText = "font-size: 2rem; color: #fff";
//         form.addEventListener("submit", (e) => {
//             const formElements = form.querySelectorAll("input"), formData = new FormData(form), formBody = {};
//             e.preventDefault();
//             showStatus("load");
//             form.appendChild(statusMessage);
//             formData.forEach((val, key) => {
//                 formBody[key] = val;
//             });
//             sendData(formBody).then((data) => {
//                 showStatus("success");
//                 formElements.forEach((input) => {
//                     input.value = "";
//                 });
//                 setTimeout(() => {
//                     document.querySelector(".popup").style.display = "none";
//                 }, 2000);
//             }).catch((error) => {
//                 showStatus("error");
//             });
//         });
//     };
//     document.querySelectorAll("form").forEach((elem) => submitForm(elem));
// };
// export default sendForm;