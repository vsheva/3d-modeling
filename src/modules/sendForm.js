const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    // оповещение
    const statusBlock = document.createElement("div")
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется!'



        const phoneInput = form.querySelector('input[name="user_phone"]');
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/[^\d\(\)\+\-]/gi, '');
        });

        const nameInput = form.querySelector("input[name='user_name']");
        nameInput.addEventListener('input', () => {
            nameInput.value = nameInput.value.replace(/[^а-я\s]/gi, '');
        });

        const messageInput = document.querySelector("input[name='user_message']");
        messageInput.addEventListener('input', () => {
            messageInput.value = messageInput.value.replace(/[^а-я\d\s\,\.\!\-\:\;\"\?\(\)]/gi, '');
        });





    const validate = (list) => {
        let success = true;
        list.forEach(input => {
            if(!input.classList.contains("success")){
                success = false;
            }
        })
       return success;

    }


    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    //////////submitForm
    const submitForm = () => {
        const formElements = form.querySelectorAll("input")
        const formData = new FormData(form)
        const formBody = {}

        // оповещение
        statusBlock.textContent = loadText
        form.append(statusBlock)
        //

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)   //

            if (elem.type === "block") {
                formBody[elem.id] = element.textContent
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value
            }
        })

        /// проверка инпута на правильный ввод и на запрет ввода опред.символов


        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    //оповещение
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert("Данные не валидны!")
        }
    }
/////////////////////////////////


    try {
        if (!form) {
            throw new Error("Верните форму на место, пожаааааалуйста))")
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.error(error.message);
    }
}

export default sendForm;























// const validate = (list) => {
//     let success = true;
    // list.forEach(input => {
    //     if(!input.classList.contains("success")){
    //         success = false;
    //     }
    // })
//     return success;
// }

