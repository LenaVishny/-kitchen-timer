const btnStart = document.querySelector('#btnStart');
btnStart.addEventListener('click', timer)


function timer(){

    const inputMinutes = document.querySelector('#inputMinutes').value;
     let inputMinutesNew = Number(inputMinutes);
     let amountTime = inputMinutesNew * 60;
     
     console.log(amountTime)
    

function calculateTime(){
    document.querySelector('#time').textContent = amountTime;

    
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime % 60;

    

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if(amountTime < 0){
        stopTimer();
        amountTime = 0;
    }

    function stopTimer(){
        clearInterval(timerId);
        document.querySelector('#myAudio').play()
    }
    console.log(stopTimer);
}
let timerId = setInterval (calculateTime, 1000);
}
