function random(maxLimit = 2) {
  const randomnum = Math.floor(Math.random() * maxLimit);

  if (randomnum === 0) {
    document.getElementById("head-or-tail-img").src = "images/heads.png";
    document.getElementById("head-or-tail-img").width = "200";
    document.getElementById("head-or-tail-img").height = "200";
    document.getElementById("reset-btn-id").style.display = "inline-block";
    hello();
  } else if (randomnum === 1) {
    document.getElementById("head-or-tail-img").src = "images/tails.png";
    document.getElementById("head-or-tail-img").width = "200";
    document.getElementById("head-or-tail-img").height = "200";
    document.getElementById("reset-btn-id").style.display = "inline-block";
    hello2();
  }
}

function reset() {
  document.getElementById("head-or-tail-img").src = "";
  document.getElementById("head-or-tail-img").width = "0";
  document.getElementById("head-or-tail-img").height = "0";
  document.getElementById("reset-btn-id").style.display = "none";
  document.getElementById("who-won-text").innerHTML = "";
}


function remimg1() {
  document.getElementById("map-btn1").style.display = "none";
}

function remimg2() {
  document.getElementById("map-btn2").style.display = "none";
}

function remimg3() {
  document.getElementById("map-btn3").style.display = "none";
}

function remimg4() {
  document.getElementById("map-btn4").style.display = "none";
}

function remimg5() {
  document.getElementById("map-btn5").style.display = "none";
}

function resetmaps() {
  document.getElementById("map-btn1").style.display = "inline-block";
  document.getElementById("map-btn2").style.display = "inline-block";
  document.getElementById("map-btn3").style.display = "inline-block";
  document.getElementById("map-btn4").style.display = "inline-block";
  document.getElementById("map-btn5").style.display = "inline-block";

}

function team1Heads() {
  var team1Option = document.getElementById("team-1").value;
  var team2Option = document.getElementById("team-2").value;
  if (team1Option === "Heads") {
    document.getElementById("team-2").value = "Tails";
  } else if (team1Option === "Tails") {
    document.getElementById("team-2").value = "Heads";
  } {

  }
}

function team2Heads() {
  var team1Option = document.getElementById("team-1").value;
  var team2Option = document.getElementById("team-2").value;
  if (team2Option === "Heads") {
    document.getElementById("team-1").value = "Tails";
  } else if (team2Option === "Tails") {
    document.getElementById("team-1").value = "Heads";
  } {

  }
}

function hello() {
  var team1Name = document.getElementById("team1name").value;
  var team2Name = document.getElementById("team2name").value;
  var team1Option = document.getElementById("team-1").value;
  var team2Option = document.getElementById("team-2").value;
  if (team1Option === "Heads") {
    document.getElementById("who-won-text").innerHTML = "Team " + team1Name + " Won the Toss";
  } else if (team2Option === "Heads") {
    document.getElementById("who-won-text").innerHTML = "Team " + team2Name + " Won the Toss";
  }
}

function hello2() {
  var team1Name = document.getElementById("team1name").value;
  var team2Name = document.getElementById("team2name").value;
  var team1Option = document.getElementById("team-1").value;
  var team2Option = document.getElementById("team-2").value;
  if (team1Option === "Tails") {
    document.getElementById("who-won-text").innerHTML = "Team " + team1Name + " Won the Toss";
  } else if (team2Option === "Tails") {
    document.getElementById("who-won-text").innerHTML = "Team " + team2Name + " Won the Toss";
  }
}
