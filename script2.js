
var scoreList = document.querySelector(".score-list");

var dispalyedScore = localStorage.getItem("scores");

// Render a new li for each todo
for (var i = 0; i < scoreList.length; i++) {
    var score = scores[i];

    var dispalyedScoreLi = document.createElement("li");
    dispalyedScoreLi.textContent = score;
    dispalyedScoreLi.setAttribute("data-index", i);

    dispalyedScore.appendChild(dispalyedScoreLi);
}





//create li
var dispalyedScoreLi = document.createElement("li");
console.log(dispalyedScoreLi)
//git it text content
dispalyedScoreLi.textContent = dispalyedScore;
//append 
scoreList.appendChild(dispalyedScoreLi);