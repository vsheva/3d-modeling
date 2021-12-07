// const formValidation = () => {
//
//
//     const userMessage = document.querySelector(".mess"),
//         userName = document.querySelectorAll("input[name=user_name]"),
//         userEmail = document.querySelectorAll(".form-email"),
//         userPhone = document.querySelectorAll(".form-phone");
//
//
//     userMessage.addEventListener("input", (event) => {
//         let target = event.target;
//         target.value = target.value.replace(
//             /[^[а-я 0-9.,:;?!()«»""\-]*/gi, ""
//         );
//
//     });
//
//
//     userName.forEach((e) => {
//         e.addEventListener("input", () => {
//             let target = event.target;
//             target.value = target.value.replace(/[^[а-я\s]*/gi, "");
//         });
//     });
//
//     userEmail.forEach((e) => {
//         e.addEventListener("input", () => {
//             let target = event.target;
//             target.value = target.value.replace(
//                 /[^[a-z_@.!~*'\-\s]*/gi, ""
//             );
//         });
//     });
//
//     userPhone.forEach((e) => {
//         e.addEventListener("input", () => {
//             let target = event.target;
//             target.value = target.value.replace(/[^[0-9()+\-]*/gi, "");
//
//         });
//     });
// }
//
// export default formValidation;