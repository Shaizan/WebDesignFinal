window.onload = init; 

var video = document.getElementById("backgroundvideo");
var arrow = document.getElementById("nextArrowId").getElementsByClassName("nextArrow")[0];
var playing = false; 
function init(){
    video.onclick = testPlaying;
    arrow.onclick = transitionImage;
    document.getElementById("branch").onclick = function() {transitionF()};
}

function testPlaying(){
    if(playing){
        pauseVideo();
    }
    else if (!playing){
        playVideo();
    }
}

function pauseVideo(){
       video.playbackRate = 0.5;
 
         sleep(3000);
    video.playbackRate = 0;
       video.pause();
 
    playing = false;
    
}

function playVideo(){
     
         video.playbackRate = 0.5;
     video.play();
         sleep(2000);
    video.playbackRate = 1.0;
       video.play();
 
    playing = true;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function transitionImage(){
    var part1 = document.getElementById("part1");
    var p1style = getComputedStyle(part1);
    
    
    var part2 = document.getElementById("part2");
    var p2style = getComputedStyle(part2);
    
    
    
  if (p1style.display == "block" && p2style.display == "none") {
    part1.style.display = "none";
    part2.style.display = "block";
  } 
    else if(p1style.display == "none" && p2style.display == "block") {
    part2.style.display = "none";
    part1.style.display = "block";
}
}

function transitionF() {
   window.location.assign("../PoemP6/index.html");
}