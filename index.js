function random(maxLimit = 2){
  const randomnum = Math.floor(Math.random() * maxLimit);

  if (randomnum === 0){
    document.getElementById("head-or-tail-img").src = "images/heads.png";
    document.getElementById("head-or-tail-img").width = "200";
    document.getElementById("head-or-tail-img").height = "200";
    document.getElementById ("reset-btn-id").style.display = "inline-block";
  }
  else if (randomnum === 1) {
    document.getElementById("head-or-tail-img").src = "images/tails.png";
    document.getElementById("head-or-tail-img").width = "200";
    document.getElementById("head-or-tail-img").height = "200";
    document.getElementById ("reset-btn-id").style.display = "inline-block";
  }
}

function reset() {
  document.getElementById("head-or-tail-img").src = "none";
  document.getElementById("head-or-tail-img").width = "0";
  document.getElementById("head-or-tail-img").height = "0";
  document.getElementById ("reset-btn-id").style.display = "none";
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
