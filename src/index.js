"use strict"
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validate from './modules/validate';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


timer("01 January 2022");
menu();
modal();
validate();
tabs();
slider();
calc();
sendForm({
    formId: "form1",
    someElem: [
        {
            type: "block",
            id: "total"
        }
    ]
});

sendForm({
    formId: "form2",

});

sendForm({
    formId: "form3",

});