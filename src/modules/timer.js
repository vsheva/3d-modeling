"use strict"

const timer = (deadline) => {
    console.log(deadline)
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");



    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)    //вычленим количество дней
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60);

        return {timeRemaining, hours, minutes, seconds }

    }


    let getZero = function (num) {
        if (num >=0 && num <10) {
            return '0'+ num;
        } else {
            return num;
        }
    }



    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerHours.textContent = getZero(getTime.hours);
        timerMinutes.textContent = getZero(getTime.minutes);
        timerSeconds.textContent = getZero(getTime.seconds);

        if (getTime.timeRemaining <= 0) {
            clearInterval(intervalId);
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }

        // if (getTime.timeRemaining < 0) {
        //     setTimeout(updateClock,1000)
        // }
    }

    let intervalId = setInterval(updateClock, 1000)

    //updateClock()

}

export default timer;


