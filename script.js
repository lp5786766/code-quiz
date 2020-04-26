var timeLeft = document.querySelector("#time-left");
var count = 3;

var points = 0;
var buttonA = document.createElement("button");
var buttonB = document.createElement("button");
var buttonC = document.createElement("button");
var buttonD = document.createElement("button");

var buttons = [buttonA, buttonB, buttonC, buttonD];

var answersDiv = document.querySelector("#answers");
var questionElement = document.querySelector(".question");
var startBtn = document.getElementById("start-btn");

var saveName = document.querySelector(".hide-form");

// PHASE ONE

startBtn.addEventListener("click", function () {
    startBtn.style.visibility = "collapse";

    //Start Timer here
    var timer = setInterval(function () {
        timeLeft.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timer);
            timeLeft.textContent = "0";
            gameOver();
        }
    }, 1000);

    questionElement.textContent = "Which of these is not a data type?";

    //right answer A:
    buttonA.textContent = "A. Variable";
    buttonB.textContent = "B. Number";
    buttonC.textContent = "C. Boolean";
    buttonD.textContent = "D. String";

    buttons.forEach(function (button) {
        button.setAttribute("class", "btn answer-btn");
        answersDiv.appendChild(button);
    });
});

// PHASE TWO

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        questionElement.textContent = "Who invented first computer?";


        buttonA.textContent = "A. ";
        buttonB.textContent = "B. ";
        //right answer C:
        buttonC.textContent = "C. ";
        buttonD.textContent = "D. ";

    });

});




// FINAL PHASE
function gameOver() {
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            questionElement.textContent = "Thank you for playing. Enter your initials to save the score!";

            buttons.forEach(function (button) {
                button.parentNode.removeChild(button);

                saveName.setAttribute("class", "row display-form");
            });
        });
    });

}








