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
     for(var i = 1; i <=0; i-=0.2){
         video.playbackRate = i;
    }
    playing = false;
    video.pause();
}

function playVideo(){
       video.play();
 
    playing = true;
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