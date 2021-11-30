"use strict"
const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block")
    const calcType = document.querySelector(".calc-type")
    const calcSquare = document.querySelector(".calc-square")
    const calcCount = document.querySelector(".calc-count")
    const calcDay = document.querySelector(".calc-day")
    const total = document.querySelector("#total")


    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value


        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }
        // основное
        // if (calcType.value && calcSquare.value) {
        //     totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
        // } else {
        //     totalValue = 0
        // }
        // total.textContent = `${totalValue} ₽`
        //let countId,

        if (calcType.value && calcSquare.value) {

            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue

            //Запуск анимации
            let step = 100;
            let time = 2000
            let t = Math.round(2000 / (totalValue / 100));
            let interval = setInterval(() => {

                let n = 0;
                n = n + step;
                if (n == totalValue) {
                    clearInterval(interval);

                }
                total.innerHTML = totalValue;
                //total.textContent = ;
            }, t);

        }
    };


    calcBlock.addEventListener("change", (e) => {

        if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    });
}


export default calc;












