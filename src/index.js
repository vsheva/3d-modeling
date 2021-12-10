"use strict"
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calcValidate from './modules/calcValidate';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import formValidation from './modules/formValidation';


timer("01 January 2022");
menu();
modal();
calcValidate();
tabs();
slider();
calc();
sendForm("form1");
sendForm("form2");
sendForm("form3");
formValidation();




























// sendForm({
//     formId: "form1",
//     someElem: [
//         {
//             type: "block",
//             id: "total"
//         }
//     ]
// });
//
// sendForm({
//     formId: "form2",
//
// });
//
// sendForm({
//     formId: "form3",
//
// });


































