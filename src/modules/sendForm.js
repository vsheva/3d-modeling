'use strict'

const sendForm = (formId) => {
    const form = document.getElementById(formId);
    const errorText = 'Что-то пошло не так...';
    const loadText = 'Загрузка...';
    const successText = 'Спасибо! Мы скоро с Вами свяжемся!';
    const status = document.createElement('div');
    console.log(form)

    // функция валидейт
      const validate = (list) =>{
       let success = true

          return success
      }
    // конец валидейта


    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }



    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const formData = new FormData(form)
        const formBody = {}
        const formElements=form.querySelectorAll("input")


        status.textContent = loadText
        form.append(status)

        formData.forEach((val, key) => {
            formBody[key] = val
        })


        //
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                status.textContent=successText

                formElements.forEach(input =>{
                   input.value=''
                })
            })
                .catch(err => {
                    status.textContent=errorText
                })
        }
        //

        // sendData(formBody).then(data => {
        //     console.log(data)
        // })

    })

}

export default sendForm;














































































// !!!!!!!!          __________________________простая отправка данных формы на сервер________________________________________________ 10 минут урока !!!!


// const sendForm = (formId) => {
//     const form = document.getElementById(formId);
//     console.log(form)
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
//
//     form.addEventListener("submit", (event) => {
//         event.preventDefault()
//
//         const formData = new FormData(form)
//         const formBody = {}
//         formData.forEach((val, key) => {
//             formBody[key] = val
//         })
//
//         sendData(formBody).then(data => {
//             console.log(data)
//         })
//     })
//
//
// }
//
// export default sendForm;











//решение
// 'use strict';
// const sendForm = () => {
//     const errorMessage = 'Что-то пошло не так...';
//     const loadMessage = 'Загрузка...';
//     const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
//     const statusMessage = document.createElement('div');
//     statusMessage.style.cssText = 'font-size: 2rem; color: #ffffff';
//     //Функция отправки данных на сервер и обработки ответа
//     const postData = (formData) => {
//         return fetch('./server.php', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             },
//             body: formData
//         });
//     };
//     const formSubmit = (target) => {
//         target.appendChild(statusMessage);
//         statusMessage.textContent = loadMessage;
//         const formData = new FormData(target);
//         target.reset();
//         const removeMessage = () => {
//             setTimeout(() => statusMessage.remove(), 5000);
//         };
//         const closePopUpSend = () => {
//             setTimeout(() => {
//                 if (target.matches('#form3')) {
//                     document.querySelector('.popup').style.display = 'none';
//                 }
//             }, 5500);
//         };
//         postData(formData).then((response) => {
//             if (response.status !== 200) {
//                 throw new Error('Status network not 200');
//             }
//             statusMessage.textContent = successMessage;
//             removeMessage();
//             closePopUpSend();
//         }).catch(error => {
//             statusMessage.textContent = errorMessage;
//             console.error(error);
//             removeMessage();
//         });
//     };
//     document.body.addEventListener('submit', (event) => {
//         event.preventDefault();
//         if (event.target.querySelector('[placeholder~="E-mail"]').value.trim() !== '') {
//             formSubmit(event.target);
//         }
//     });
// };
//
// export default sendForm;













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









