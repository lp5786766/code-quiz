var timeLeft = document.querySelector("#time-left");
var count = 60;

var points = 0;
var buttonA = document.createElement("button");

var buttonB = document.createElement("button");
buttonB.setAttribute("class", "B");
var buttonC = document.createElement("button");
buttonC.setAttribute("class", "C");
var buttonD = document.createElement("button");
buttonD.setAttribute("class", "D");

var buttons = [buttonA, buttonB, buttonC, buttonD];

var answersDiv = document.querySelector("#answers");
var questionElement = document.querySelector(".question");
var startBtn = document.getElementById("start-btn");

var saveName = document.querySelector(".hide-form");

// Start button triggers PHASE ONE

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

    questionOne();







    buttons.forEach(function (button) {
        // button.setAttribute("class", "btn answer-btn");
        buttonA.setAttribute("class", "btn answer-btn");
        buttonA.setAttribute("id", "A");
        answersDiv.appendChild(button);
    });
});

// First reply triggers PHASE TWO



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
};
function questionOne() {
    questionElement.textContent = "Which of these is NOT a data type?";
    //right answer A:
    buttonA.textContent = "A. Variable";
    buttonB.textContent = "B. Number";
    buttonC.textContent = "C. Boolean";
    buttonD.textContent = "D. String";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            //if statements
            var answerOne = event.target.id
            console.log(event.target.id)
            if (answerOne = "A") {
                alert("Correct!");
            } else {
                alert("Wrong!");
            }



            //add points
            questionTwo();
        });
    });
}

function questionTwo() {
    questionElement.textContent = "What does `a` stand for in the <a></a> tag?";
    buttonA.textContent = "A. Appendix";
    buttonB.textContent = "B. Application";
    //right answer C:
    buttonC.textContent = "C. Anchor";
    buttonD.textContent = "D. Add";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var answerTwo = event.target
            if (answerTwo === "C. Anchor") {
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
            clear();
            questionThree();
        });
    });
};

function questionThree() {
    questionElement.textContent = "who am i?";
    buttonA.textContent = "A. A ";
    buttonB.textContent = "B. A";
    buttonC.textContent = "C. A";
    //right answer D:
    buttonD.textContent = "D. A";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("answer3");
        });
    });
};




