displayScores();

function displayScores() {
  console.log(scores);
  var scores = JSON.parse(localStorage.getItem('scores'));

  if (scores === null) {
    scores = [];
  }
  // display the scores on the screen
  for (var i = 0; i < scores.length; i++) {
    //add to HTML
    var clearBtn = document.querySelector('.clear');
    var scoreslist = document.getElementById('score-list');
    var liEl = document.createElement('li');
    console.log(liEl);
    liEl.innerHTML = scores[i].name + ': ' + scores[i].finalScore;
    console.log(liEl);
    scoreslist.append(liEl);

    // jquery
    // $('#scores').append(
    //   '<li>' + scores[i].initials + ': ' + scores[i].finalScore + '</li>'
    // );
  }

  clearBtn.addEventListener('click', function () {
    // remove the scores from the page
    document.getElementById('score-list').innerHTML = '';

    // remove from localstorage
    localStorage.removeItem('scores');
  });
}
