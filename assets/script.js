//Creating a function to allow for the starting content to appear and disappear
var timerEl = document.querySelector(".time");
var startScreenDiv = document.querySelector(".main");
var countC = localStorage.getItem("count");
var header = document.createElement("h1");
var finalScore = document.createElement("p");
var userScore = localStorage.getItem("count");
var label = document.createElement("p");
var leaderboardUser = document.createElement("input");
var submitUser = document.createElement("button");

//Adding stored value for penalty and starting timer value
var startValue = 0;
var penalty = 10;
var secondsLeft = 75;
var timerInterval = setInterval

//From module 4 activity 9
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        nextQuestion();
        finalPage();
//        getZero();
      } 
  
    }, 1000);
    function nextQuestion () {
        var disappearQ = document.getElementById("q");
        disappearQ.remove();
        document.getElementById("ql1").remove();
        document.getElementById("ql2").remove();
        document.getElementById("ql3").remove();
        document.getElementById("ql4").remove();
    }
  }

//Trying to fix null issue when allowing timer to hit zero on question 1
//function getZero () {
//    if (userScore === null) {
//        $userScore = $userScore() || 0;
//    }
//}
//Inspired by activity 24
function subUser () {
    submitUser.addEventListener("click", function (event) {
        event.preventDefault();

        var lbUser = {
            userentry: leaderboardUser.value.trim()
        }
        localStorage.setItem("userentry", JSON.stringify(lbUser));
    })}

function finalPage () {
//    getZero();
    var header = document.createElement("h1");
    header.textContent = "All done!"
    startScreenDiv.appendChild(header);
    var finalScore = document.createElement("p");
    var userScore = localStorage.getItem("count");
    finalScore.textContent = "Your final score is " + userScore + " out of 5.";
    startScreenDiv.appendChild(finalScore);
    var leaderboardUser = document.createElement("input");
    leaderboardUser.setAttribute("placeholder", "Enter initials: ");
    startScreenDiv.appendChild(leaderboardUser);
    var submitUser = document.createElement("button");
    submitUser.textContent = "Submit";
    startScreenDiv.appendChild(submitUser);
    subUser();
}

function countCorrAdd () {
    if (countC < 5) {
        countC++;
        localStorage.setItem("count", countC);
    }
}

function startClear () {
    document.querySelector("h1").remove();
    document.querySelector("p").remove();
    var startButton = document.getElementById("startbutton")
    startButton.remove();
}

//Inspired by Activity 12
function ohNo () {
    if (secondsLeft !== 0) {
    var newTime = secondsLeft - 10;
    secondsLeft = newTime;
    };
}

function startPage() {
    timerEl.textContent = "Time: 0";
    var header = document.createElement("h1");
    header.setAttribute("class", "header");
    header.textContent = "Coding Quiz Challenge";
    startScreenDiv.appendChild(header);
    var explanation = document.createElement("p");
    explanation.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    startScreenDiv.appendChild(explanation);
    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz";
    startButton.setAttribute("id", "startbutton");
    startButton.setAttribute("class", "$indigo-400")
    startScreenDiv.appendChild(startButton);
    //Inspired by https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener2
    var myBtn = document.getElementById("startbutton");
    myBtn.addEventListener("click", startClear);
    myBtn.addEventListener("click", setTime);
    myBtn.addEventListener("click", quest1);
}
startPage();

var answerBin = document.createElement("div");

function quest1 () {
    var header = document.createElement("h1");
    header.textContent = "Commonly used data types DO Not Include:";
    header.setAttribute("id", "q");
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.textContent = "strings";
    multiChoice1.setAttribute("id", "ql1");
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.setAttribute("id", "ql2");
    multiChoice2.textContent = "booleans";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.setAttribute("id", "ql3");
    multiChoice3.textContent = "alerts";
    multiChoice3.setAttribute("class", "correct");
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.setAttribute("id", "ql4");
    multiChoice4.textContent = "numbers";
    multiChoiceBin.appendChild(multiChoice4);
    multiChoiceBin.appendChild(answerBin);

    function nextQuestion () {
        var disappearQ = document.getElementById("q");
        disappearQ.remove();
        document.getElementById("ql1").remove();
        document.getElementById("ql2").remove();
        document.getElementById("ql3").remove();
        document.getElementById("ql4").remove();
    }

    //Add function to use event listener to determine if correct answer was selected and display result
    function answered () {
        multiChoiceBin.addEventListener("click", function (event) {
            var selectedAnswer = event.target;
        if (selectedAnswer.matches(".correct")) {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Correct!";
            answerBin.appendChild(result);
            countCorrAdd();
            nextQuestion();
            quest2();
        } else {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Incorrect!";
            answerBin.appendChild(result);
            ohNo();
            nextQuestion();
            quest2();
        }
    })}
    
    answered();
}
function quest2 () {
    var header = document.createElement("h1");
    header.textContent = "The condition in an if / else statement is enclosed with _______.";
    header.setAttribute("id", "q");
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.setAttribute("id", "ql1");
    multiChoice1.textContent = "quotes";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.setAttribute("id", "ql2");
    multiChoice2.textContent = "curly brackets";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.setAttribute("id", "ql3");
    multiChoice3.textContent = "parenthesis";
    multiChoice3.setAttribute("class", "correct");
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.setAttribute("id", "ql4");
    multiChoice4.textContent = "square brackets";
    multiChoiceBin.appendChild(multiChoice4);

    function nextQuestion () {
        var disappearQ = document.getElementById("q");
        disappearQ.remove();
        document.getElementById("ql1").remove();
        document.getElementById("ql2").remove();
        document.getElementById("ql3").remove();
        document.getElementById("ql4").remove();
    }

    function answered () {
        multiChoiceBin.addEventListener("click", function (event) {
            var selectedAnswer = event.target;
        if (selectedAnswer.matches(".correct")) {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Correct!";
            answerBin.appendChild(result);
            countCorrAdd();
            nextQuestion();
            quest3();
        } else {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Incorrect!";
            answerBin.appendChild(result);
            ohNo();
            nextQuestion();
            quest3();
        }
    })}
    
    answered();
}
function quest3 () {
    document.getElementById("result").remove();
    var header = document.createElement("h1");
    header.textContent = "Arrays in JavaScript can be used to store _______.";
    header.setAttribute("id", "q");
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.setAttribute("id", "ql1");
    multiChoice1.textContent = "numbers and strings";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.setAttribute("id", "ql2");
    multiChoice2.textContent = "other arrays";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.setAttribute("id", "ql3");
    multiChoice3.textContent = "booleans";
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.textContent = "all of the above";
    multiChoice4.setAttribute("class", "correct");
    multiChoice4.setAttribute("id", "ql4");
    multiChoiceBin.appendChild(multiChoice4);

    function nextQuestion () {
        var disappearQ = document.getElementById("q");
        disappearQ.remove();
        document.getElementById("ql1").remove();
        document.getElementById("ql2").remove();
        document.getElementById("ql3").remove();
        document.getElementById("ql4").remove();
    }

    function answered () {
        multiChoiceBin.addEventListener("click", function (event) {
            var selectedAnswer = event.target;
        if (selectedAnswer.matches(".correct")) {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Correct!";
            answerBin.appendChild(result);
            countCorrAdd();
            nextQuestion();
            quest4();
        } else {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Incorrect!";
            answerBin.appendChild(result);
            ohNo();
            nextQuestion();
            quest4();
        }
    })}
    
    answered();
}
function quest4 () {
    document.getElementById("result").remove();
    var header = document.createElement("h1");
    header.textContent = "String values must be enclosed within ______ when being assigned to variables.";
    header.setAttribute("id", "q");
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.setAttribute("id", "ql1");
    multiChoice1.textContent = "commas";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.setAttribute("id", "ql2");
    multiChoice2.textContent = "curly brackets";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.textContent = "quotes";
    multiChoice3.setAttribute("class", "correct");
    multiChoice3.setAttribute("id", "ql3");
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.setAttribute("id", "ql4");
    multiChoice4.textContent = "parenthesis";
    multiChoiceBin.appendChild(multiChoice4);

    function nextQuestion () {
        var disappearQ = document.getElementById("q");
        disappearQ.remove();
        document.getElementById("ql1").remove();
        document.getElementById("ql2").remove();
        document.getElementById("ql3").remove();
        document.getElementById("ql4").remove();
    }

    function answered () {
        multiChoiceBin.addEventListener("click", function (event) {
            var selectedAnswer = event.target;
        if (selectedAnswer.matches(".correct")) {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Correct!";
            answerBin.appendChild(result);
            countCorrAdd();
            nextQuestion();
            quest5();
        } else {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Incorrect!";
            answerBin.appendChild(result);
            ohNo();
            nextQuestion();
            quest5();
        }
    })}
    
    answered();
}
function quest5 () {
    document.getElementById("result").remove();
    var header = document.createElement("h1");
    header.setAttribute("id", "q");
    header.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    startScreenDiv.appendChild(header);
    var multiChoiceBin = document.createElement("ol");
    startScreenDiv.appendChild(multiChoiceBin);
    var multiChoice1 = document.createElement("li");
    multiChoice1.setAttribute("id", "ql1");
    multiChoice1.textContent = "JavaScript";
    multiChoiceBin.appendChild(multiChoice1);
    var multiChoice2 = document.createElement("li");
    multiChoice2.setAttribute("id", "ql2");
    multiChoice2.textContent = "terminal/bash";
    multiChoiceBin.appendChild(multiChoice2);
    var multiChoice3 = document.createElement("li");
    multiChoice3.textContent = "for loops";
    multiChoice3.setAttribute("id", "ql3");
    multiChoiceBin.appendChild(multiChoice3);
    var multiChoice4 = document.createElement("li");
    multiChoice4.textContent = "console.log";
    multiChoice4.setAttribute("class", "correct");
    multiChoice4.setAttribute("id", "ql4");
    multiChoiceBin.appendChild(multiChoice4);

    function nextQuestion () {
        var disappearQ = document.getElementById("q");
        disappearQ.remove();
        document.getElementById("ql1").remove();
        document.getElementById("ql2").remove();
        document.getElementById("ql3").remove();
        document.getElementById("ql4").remove();
    }
    function finalPage () {
        document.getElementById("result").remove();
        var header = document.createElement("h1");
        header.textContent = "All done!"
        startScreenDiv.appendChild(header);
        var finalScore = document.createElement("p");
        var userScore = localStorage.getItem("count");
        finalScore.textContent = "Your final score is " + userScore + " out of 5.";
        startScreenDiv.appendChild(finalScore);
        var leaderboardUser = document.createElement("input");
        leaderboardUser.setAttribute("placeholder", "Enter initials: ");
        startScreenDiv.appendChild(leaderboardUser);
        var submitUser = document.createElement("button");
        submitUser.textContent = "Submit";
        startScreenDiv.appendChild(submitUser);
        subUser();

        //Inspired by activity 24
        function subUser () {
        submitUser.addEventListener("click", function (event) {
            event.preventDefault();

            var lbUser = {
                userentry: leaderboardUser.value.trim(),
                score: userScore
            }
            localStorage.setItem("userentry", JSON.stringify(lbUser));
        })}
        }

    function answered () {
        multiChoiceBin.addEventListener("click", function (event) {
            var selectedAnswer = event.target;
        if (selectedAnswer.matches(".correct")) {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Correct!";
            answerBin.appendChild(result);
            countCorrAdd();   
            nextQuestion();
            finalPage();
            clearInterval(timerInterval);
        } else {
            var result = document.createElement("h1");
            result.setAttribute("id", "result");
            result.textContent = "Incorrect!";
            answerBin.appendChild(result);
            ohNo();
            nextQuestion();
            finalPage();
            clearInterval(timerInterval);
        }
    })}
    
    answered();
}
//Added function for final page

