//Creating a function to allow for the starting content to appear and disappear
var timerEl = document.querySelector(".time");
var startScreenDiv = document.querySelector(".main");

function startClear () {
    document.querySelector("h1").remove();
    document.querySelector("p").remove();
    var startButton = document.getElementById("startbutton")
    startButton.remove();
    quest1();
}

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
    startButton.setAttribute("id", "startbutton");
    startScreenDiv.appendChild(startButton);
    //Inspired by https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener2
    var myBtn = document.getElementById("startbutton");
    myBtn.addEventListener("click", startClear);
}
startPage();

function quest1 () {
    var header = document.createElement("h1");
    header.textContent = "Commonly used data types DO Not Include:";
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.textContent = "strings";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.textContent = "booleans";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.textContent = "alerts";
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.textContent = "numbers";
    multiChoiceBin.appendChild(multiChoice4);
}
function quest2 () {
    var header = document.createElement("h1");
    header.textContent = "The condition in an if / else statement is enclosed with _______.";
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.textContent = "quotes";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.textContent = "curly brackets";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.textContent = "parenthesis";
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.textContent = "square brackets";
    multiChoiceBin.appendChild(multiChoice4);
}
function quest3 () {
    var header = document.createElement("h1");
    header.textContent = "Arrays in JavaScript can be used to store _______.";
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.textContent = "numbers and strings";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.textContent = "other arrays";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.textContent = "booleans";
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.textContent = "all of the above";
    multiChoiceBin.appendChild(multiChoice4);
}
function quest4 () {
    var header = document.createElement("h1");
    header.textContent = "String values must be enclosed within ______ when being assigned to variables.";
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.textContent = "commas";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.textContent = "curly brackets";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.textContent = "quotes";
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.textContent = "parenthesis";
    multiChoiceBin.appendChild(multiChoice4);
}
function quest5 () {
    var header = document.createElement("h1");
    header.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.textContent = "JavaScript";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.textContent = "terminal/bash";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.textContent = "for loops";
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.textContent = "console.log";
    multiChoiceBin.appendChild(multiChoice4);
}

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
