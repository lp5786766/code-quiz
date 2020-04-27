var clearBtn = document.querySelector(".clear");
var scoreList = document.querySelector(".score-list");

var dispalyedScore = localStorage.getItem("scores");
console.log(dispalyedScore);
// Render a new li for each todo


dispalyedScore.forEach(function (item) {
    console.log(item);
    // var dispalyedScoreLi = document.createElement("li");
    // dispalyedScoreLi.textContent = item;
    // dispalyedScore.appendChild(dispalyedScoreLi);
});
// for (var i = 0; i < scoreList.length; i++) {
//     var score = dispalyedScore[i];

//     var dispalyedScoreLi = document.createElement("li");
//     dispalyedScoreLi.textContent = score;
//     dispalyedScoreLi.setAttribute("data-index", i);


// }


clearBtn.addEventListener("click", function () {

    dispalyedScoreLi.parentNode.removeChild(dispalyedScoreLi);
});
