window.onload = init; 

function init(){
    var bgVid = document.getElementById("backgroundvideo");

    bgVid.addEventListener("timeupdate", function () {
        console.log('checking time...');
        if (bgVid.currentTime > bgVid.duration - 0.2) {
            /*this.currentTime = 5;
            this.play();
            */
            this.pause();
        }
    });
    
    document.getElementById("branch").onclick = function() {transitionF()};
}

function transitionF() {
   window.location.assign("../PoemP2/index.html");
}
