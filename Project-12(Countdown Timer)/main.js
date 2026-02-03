let timer
let targetTime
let isPaused =false
let remainingTime=0
const daysE1=document.getElementById("days");
const hoursE1=document.getElementById("hours")
const minutesE1=document.getElementById("minutes")
const secondsE1=document.getElementById("seconds")

 window.onload = () => {
      const savedTime = localStorage.getItem("remainingTime");
      if (savedTime) {
        remainingTime = parseInt(savedTime);
        startCountdownFromRemaining();
      }
    };
function startTimer(){
    const inputDateTime=document.getElementById("inputDateTime").value

    if(!inputDateTime){
        alert("please enter date and time")
        return
    }
    targetTime=new Date(inputDateTime).getTime()
    remainingTime=targetTime-Date.now()

    if(remainingTime<=0){
        alert("Select future time")
        return
    }
      localStorage.setItem("remainingTime", remainingTime);
      startCountdownFromRemaining();
}

    function startCountdownFromRemaining() {
      clearInterval(timer);
      timer = setInterval(() => {
        if (!isPaused) {
          remainingTime -= 1000;
          localStorage.setItem("remainingTime", remainingTime);

          if (remainingTime <= 0) {
            clearInterval(timer);
            localStorage.removeItem("remainingTime");
            updateUI(0);
            alert("⏰ Time's up!");
            return;
          }
          updateUI(remainingTime);
        }
      }, 1000);
    }
      function updateUI(ms) {
      const totalSeconds = Math.floor(ms / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      daysE1.innerHTML = `${String(days).padStart(2, "0")} <span>Days</span>`;
      hoursE1.innerHTML = `${String(hours).padStart(2, "0")} <span>Months</span>`;
      minutesE1.innerHTML = `${String(minutes).padStart(2, "0")} <span>Minutes</span>`;
      secondsE1.innerHTML = `${String(seconds).padStart(2, "0")} <span>Seconds</span>`;
    }
    
    function pauseTimer() {
      isPaused = !isPaused;
    }

    function resetTimer() {
      clearInterval(timer);
      localStorage.removeItem("remainingTime");
      isPaused = false;
      updateUI(0);
    }