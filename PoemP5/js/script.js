window.onload = init; 

var video = document.getElementById("backgroundvideo");
var playing = false; 
function init(){
    video.onclick = testPlaying;
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
      for(var i = 1; i <=0; i-=0.2){
         video.playbackRate = i;
          setTimeout(function(){}, 1000); 
    }
 
    playing = true;
}
