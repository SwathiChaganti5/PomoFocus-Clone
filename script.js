
let timer;
let isRunning = false;
let time= 25 * 60; 

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const pauseBtn=document.getElementById("pause");


function updateTime() {
  const min = Math.floor(time / 60);
  const sec = time % 60;
  minutes.textContent = String(min).padStart(2, "0");
  seconds.textContent = String(sec).padStart(2, "0");
}
function startTimer() {

  isRunning = true; 
  startBtn.style.display="none";
  pauseBtn.style.display="inline-block";

  timer = setInterval(() => {
    if (time <= 0) {
      clearInterval(timer); 
      isRunning = false;
      let pomodoroCount=Number(localStorage.getItem("pomoCount")) || 0;
      pomodoroCount++;
      localStorage.setItem("pomoCount",pomodoroCount);
      if(pomodoroCount % 4 == 0){
        alert("Its time for a 'Long Break'");
        window.location.href="longBreak.html";
      }
      else{
        alert("Its time for a 'Short Break'");
        window.location.href="shortBreak.html";
      }
      
    } 
    else {
      time--;
      updateTime();
    }
  }, 1000);  
}

function pauseTimer(){
  isRunning=false;
  pauseBtn.style.display="none";
  startBtn.style.display="inline-block";
  clearInterval(timer);
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click",pauseTimer);

updateTime();
 

