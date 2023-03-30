const hoursBlock = document.querySelector('.hours')
const minsBlock = document.querySelector('.minutes')
const secsBlock = document.querySelector('.seconds')
const startBlock = document.querySelector('.start')
const stopBlock = document.querySelector('.stop')
const resetBlock = document.querySelector('.reset')

let interval; 
let hours = 0;
let minutes = 0;
let seconds = 0;

const startTimer = () => {
    seconds++;
    secsBlock.innerHTML = '0' + seconds;

    if(seconds>9){
        secsBlock.innerHTML = seconds;
    }
    
    if(seconds > 59){
       minutes++; 
       minsBlock.innerHTML = '0' + minutes;

       seconds = 0;
    }
    if(minutes >9 ){
        minsBlock.innerHTML = minutes;
    }

    if(minutes >59 ){
        hours++;
        hoursBlock.innerHTML = '0' + hours;

        minutes = 0;
        minsBlock.innerHTML = '0'
    }
    if(hours>9){
        hoursBlock.innerHTML = minutes;
    }

};

startBlock.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000)
});
stopBlock.addEventListener('click', () => {
    clearInterval(interval);
});
resetBlock.addEventListener('click', () => {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;

    hoursBlock.innerHTML =  '00'
    minsBlock.innerHTML = '00'
    secsBlock.innerHTML = '00'
});