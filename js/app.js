var clock = document.querySelector("#clock")
var minutes = 1
var seconds = 0




var inputText = document.querySelector('#task-input')
var currentTask = document.querySelector('.current-task')
var jumbo = document.querySelector('.pom-jumbo')
document.querySelector('.submit-button').addEventListener('click', function(){
   var startClock = setInterval(function(){

      if(seconds === 0){
         seconds = 60
         minutes -= 1

      }
      seconds -= 1
      var secondsStr
      if(seconds <= 9){
         secondsStr = "0" + seconds.toString()
      }else{
         secondsStr = seconds.toString()
      }


      clock.innerHTML = minutes.toString() + ':'+ secondsStr
      if(clock.innerHTML === "0:00"){
         jumbo.innerHTML = '<h1 id="finished">Pomodoro Complete</h1>'
         window.clearInterval(startClock)
      }
   }, 100)


    currentTask.innerHTML = inputText.value

    inputText.value = ""


})
