

function displayScores() {
  
  const scores = JSON.parse(localStorage.getItem('scores'));
  console.log(scores);
  if (scores === null) {
    scores = [];
  }
  // display the scores on the screen
  for (var i = 0; i < scores.length; i++) {
    //add to HTML
    
    const scoreslist = document.getElementById('score-list');
    const liEl = document.createElement('li');
    console.log(liEl);
    liEl.innerHTML = scores[i].name + ': ' + scores[i].finalScore;
    scoreslist.append(liEl);

    // jquery
    // $('#scores').append(
    //   '<li>' + scores[i].initials + ': ' + scores[i].finalScore + '</li>'
    // );
  }
  let clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', function () {
    // remove the scores from the page
    document.getElementById('score-list').innerHTML = '';

    // remove from localstorage
    localStorage.removeItem('scores');
  });
}

displayScores();
