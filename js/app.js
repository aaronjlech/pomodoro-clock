var clock = document.querySelector("#clock")
var minutes = 25
var seconds = 0




var inputText = document.querySelector('#task-input')
var currentTask = document.querySelector('.current-task')
var jumbo = document.querySelector('.pom-jumbo')
var taskList = document.querySelector(".task-list")

document.querySelector('.submit-button').addEventListener('click', function(){

   taskList.innerHTML += '<div class="task container"><div class="row"><h3>' + inputText.value +'</h3><div class="col-xs-8"></div><div class="col-xs-4"><i class="fa fa-play" aria-hidden="true"></i><i class="fa fa-trash" aria-hidden="true"></i></div></div></div>'
         // document.querySelector('.fa-trash')
         // document.querySelector('.fa-play').addEventListener("click", function(){
         //
         // })
         var allPlays = document.querySelectorAll('.fa-play')
         var allDeletes = document.querySelectorAll('.fa-trash')

         if(allPlays.length !== 0 && allDeletes.length !== 0){
            allPlays.forEach(function(node, i){
               node.addEventListener('click', function(){
                  currentTask.innerHTML = node.parentNode.parentNode.innerText
                  node.parentNode.parentNode.parentNode.remove()
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

               })
            })
            allDeletes.forEach(function(node, i){
               node.addEventListener('click', function(){
                  node.parentNode.parentNode.parentNode.remove()
               })
            })

         }




})
