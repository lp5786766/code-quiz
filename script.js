var timeLeft = document.querySelector("#time-left");
var count = 45;

var points = 0;
var buttonA = document.createElement("button");
var buttonB = document.createElement("button");
var buttonC = document.createElement("button");
var buttonD = document.createElement("button");
var buttons = [buttonA, buttonB, buttonC, buttonD];

var answersDiv = document.querySelector("#answers");
var questionElement = document.querySelector(".question");
var startBtn = document.getElementById("start-btn");
var submitBtn = document.getElementById("submit-button");
var saveName = document.querySelector(".hide-form");
init();
// Start button triggers PHASE ONE
startGame();

function startGame() {
    startBtn.addEventListener("click", function () {
        startBtn.style.display = "none";

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
            button.setAttribute("class", "btn answer-btn");
            buttonA.setAttribute("id", "A");
            buttonB.setAttribute("id", "B");
            buttonC.setAttribute("id", "C");
            buttonD.setAttribute("id", "D");
            answersDiv.appendChild(button);

        });
    });
}


// First reply triggers PHASE TWO

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
            if (answerOne === "A") {
                displayCorrect();
            } else {
                displayWrong();
            }
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
            var answerTwo = event.target.id
            if (answerTwo === "C") {
                displayCorrect();
            } else {
                displayWrong();
            }
            questionThree();
        });
    });
};

function questionThree() {
    questionElement.textContent = "Question three?";
    buttonA.textContent = "A.  ";
    buttonB.textContent = "B. ";
    buttonC.textContent = "C. ";
    //right answer D:
    buttonD.textContent = "D. Def";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var answerThree = event.target.id
            if (answerThree === "D") {
                displayCorrect();
            } else {
                displayWrong();
            }
            questionFour();
        });
    });
};

function questionFour() {
    questionElement.textContent = "Question Four?";
    buttonA.textContent = "A. ";
    //right answer B:
    buttonB.textContent = "B. wzy";
    buttonC.textContent = "C. ";
    buttonD.textContent = "D. ";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var answerFour = event.target.id
            if (answerFour === "B") {
                displayCorrect();
            } else {
                displayWrong();
            }
            questionFive();
        });
    });
};

function questionFive() {
    questionElement.textContent = "Question Five?";
    buttonA.textContent = "A. cactus";
    buttonB.textContent = "B. lamp";
    buttonC.textContent = "C. flower";
    //right answer D:
    buttonD.textContent = "D. troll";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {

            var answerFive = event.target.id
            if (answerFive === "D") {
                displayCorrect();
            } else {
                displayWrong();
            }
            gameOver();
        });
    });
};

function displayCorrect() {
    points++;
    document.getElementById("display-message").innerHTML = "Correct!";
    setTimeout(function () {
        document.getElementById("display-message").innerHTML = " ";
    }, 1000);
};

function displayWrong() {
    document.getElementById("display-message").innerHTML = "Wrong!";
    setTimeout(function () {
        document.getElementById("display-message").innerHTML = " ";
    }, 1000);
};





var finalScore = count + points;
var scores = [];

function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
        scores = storedScores;
    }
}



// FINAL PHASE
function gameOver() {

    questionElement.textContent = "Game Over. Your Score is " + finalScore + ". Enter your name to save the score!";
    buttons.forEach(function (button) {
        button.parentNode.removeChild(button);
        saveName.setAttribute("class", "row display-form");
    });
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        var name = document.querySelector("#name").value;
        var recordedScore = name + " - " + finalScore;

        scores.push(recordedScore);
        storeScores()

        location.href = "scores.html";



    });
};



