let timeLeft = document.querySelector("#time-left");
let count = 45;

let points = 0;
let buttonA = document.createElement("button");
let buttonB = document.createElement("button");
let buttonC = document.createElement("button");
let buttonD = document.createElement("button");
let buttons = [buttonA, buttonB, buttonC, buttonD];

const answersDiv = document.querySelector("#answers");
const questionElement = document.querySelector(".question");
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-button");
const saveName = document.getElementById("name-form");

// Start button triggers PHASE ONE
startGame();

function startGame() {
  startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";

    //Start Timer here
    const timer = setInterval(function () {
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
      let answerOne = event.target.id;
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
      let answerTwo = event.target.id;
      if (answerTwo === "C") {
        displayCorrect();
      } else {
        displayWrong();
      }
      questionThree();
    });
  });
}

function questionThree() {
  questionElement.textContent = "What does forEach function loops over?";
  buttonA.textContent = "A. Functions";
  buttonB.textContent = "B. Strings";
  buttonC.textContent = "C. HTML pages";
  //right answer D:
  buttonD.textContent = "D. Arrays";

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let answerThree = event.target.id;
      if (answerThree === "D") {
        displayCorrect();
      } else {
        displayWrong();
      }
      questionFour();
    });
  });
}

function questionFour() {
  questionElement.textContent = "Which of the following is camel case?";
  buttonA.textContent = "A. Hello World";
  //right answer B:
  buttonB.textContent = "B. helloWorld";
  buttonC.textContent = "C. hello-world";
  buttonD.textContent = "D. hello_world";

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let answerFour = event.target.id;
      if (answerFour === "B") {
        displayCorrect();
      } else {
        displayWrong();
      }
      questionFive();
    });
  });
}

function questionFive() {
  questionElement.textContent =
    "Which random number is Math.random() used to generate? ";
  buttonA.textContent = "A. Any number";
  buttonB.textContent = "B. Any number from 1 to 1000";
  buttonC.textContent = "C. Any number from 0 to 10";
  //right answer D:
  buttonD.textContent = "D. Any number from 0 to 1";

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let answerFive = event.target.id;
      if (answerFive === "D") {
        displayCorrect();
      } else {
        displayWrong();
      }
      gameOver();
    });
  });
}

function displayCorrect() {
  points = points + 5;
  document.getElementById("display-message").innerHTML = "Correct!";
  setTimeout(function () {
    document.getElementById("display-message").innerHTML = " ";
  }, 1000);
}

function displayWrong() {
  // count -=5;
  document.getElementById("display-message").innerHTML = "Wrong!";
  setTimeout(function () {
    document.getElementById("display-message").innerHTML = " ";
  }, 1000);
}


// FINAL PHASE
function gameOver() {
    var finalScore = points; //count + points;

    // display the Game Over Text and Score
    questionElement.textContent =
        "Game Over. Your Score is " +
        finalScore +
        ". Enter your name to save the score!";
    // hide Answers buttons
    buttons.forEach(function (button) {
        button.setAttribute("class", "hide-form");
    });
    // display Name Input form
    saveName.removeAttribute("class", "hide-form");  

    // When you enter your name and click "Submit", Name and Score are saved:
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // check local storage foe any exising scores (parse)
        // if null, then => scoresArr =[]
        let scores = JSON.parse(localStorage.getItem("scores"));
        if (scores === null) {
            scores = [];
        }
        const name = document.getElementById("name").value;

        // Add new data tot he array
        scores.push({
            name: name,
            finalScore: finalScore,
        });
        console.log(scores);
         // store the new scoresArr in local storage add - stringify, get - parse.
        localStorage.setItem("scores", JSON.stringify(scores));
        console.log(scores);
        
        // You are directed to the Scores page
        location.href = "scores.html";
        displayScores();
    });
}








