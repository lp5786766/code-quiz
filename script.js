// Coding Quiz intorductory page with "start the quiz button"

//On click question 1 appears with 4 possib;e answers(buttons)

//if you click the right answer you proceed to the next question and the "correct!" message is dispayed
//if you click on the wrong answer you proceed to the next question and the "wrong!" message is dispayed

//after all the questions your final schore is dispalyed and you are offered to enter your initials and submit.

//then the higschores are dispalyed (1.AB - 22) with two buttons: go back and clear score.

//during the quiz the timer (75s) is ticking and if you answer wrong 10 seconds are taken off the timer. time stops when you finish.


// Question 1 
// Possible answers:
var buttonA = document.createElement("button")
var buttonB = document.createElement("button")
var buttonC = document.createElement("button")
var buttonD = document.createElement("button")

var buttons = [buttonA, buttonB, buttonC, buttonD];

var answersDiv = document.querySelector("#answers");
var questionElement = document.querySelector(".question");
var startBtn = document.getElementById("start-btn");


startBtn.addEventListener("click", function () {
    startBtn.style.visibility = "collapse";
    questionElement.textContent = "Which of these is not a data type?";
    buttonA.textContent = "A. Variable";
    buttonB.textContent = "B. Number";
    buttonC.textContent = "C. Boolean";
    buttonD.textContent = "D. String";

    buttons.forEach(function (button) {
        button.setAttribute("class", "btn answer-btn");
        answersDiv.appendChild(button);
    });

});
