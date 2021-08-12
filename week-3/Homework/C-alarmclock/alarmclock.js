function setAlarm() {
  let inputedNumbers = document.getElementById('alarmSet').value;
  let timeRemaining = document.getElementById('timeRemaining');
  let initialTime = inputedNumbers;

  timeRemaining.textContent = 'Time Remaining: ' + timeOutputFnc(initialTime)
  
   
  setInterval((initialTime) => {
    initialTime--
    if (initialTime <= 0) {
      clearInterval()
    } 
  }, 1000);

}


function timeOutputFnc(time) {
  if (time>=60) {
    var timeParsed= parseInt(time, 10); 
     var minutes = Math.floor(timeParsed / 60);
     var seconds = timeParsed - (minutes * 60);
      return minutes + ":" + seconds;
     }
  else if (time<=59&&time>=10) { return "00:" + time }
  else {return "00:0" + time }
}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
