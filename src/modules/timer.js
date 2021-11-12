"use strict"

const timer = (deadline) => {
    console.log(deadline);
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        //let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60);

        //console.log(days)

        return {timeRemaining, hours, minutes, seconds }


    }

    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.timeRemaining >0) {
            setTimeout(updateClock,1000)
        }


    }
    updateClock()

    //getTimeRemaining("20 november 2021")
    // setInterval(countTimer, 1000)
}


