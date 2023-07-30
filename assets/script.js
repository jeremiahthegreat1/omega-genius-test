//Creating a function to allow for the starting content to appear and disappear
var timerEl = document.querySelector(".time");
var startScreenDiv = document.querySelector("div");
function startPage() {
    timerEl.textContent = "Time: 0";
    var header = document.createElement("h1");
    header.textContent = "Coding Quiz Challenge";
    startScreenDiv.appendChild(header);
    var explanation = document.createElement("p");
    explanation.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    startScreenDiv.appendChild(explanation);
    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz";
    startScreenDiv.appendChild(startButton);
}
startPage();


//Adding stored value for penalty and starting timer value
var startValue = 0;
var penalty = 10;
var secondsLeft = 75;

//From module 4 activity 9
function setTime() {
    t
    //Add else if to account for button press to change timer from 0
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to ***Fill this in***
        sendMessage();
      }
  
    }, 1000);
  }