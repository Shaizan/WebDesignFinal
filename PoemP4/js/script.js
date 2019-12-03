window.onload = init; 

function init(){
   document.getElementById("nextArrowId").getElementsByClassName("nextArrow")[0].onclick = transitionImage;
    document.getElementById("branch").onclick = function() {transitionF()};
}

 


function transitionF() {
   window.location.assign("../PoemP5/index.html");
}


function transitionImage(){
    
    var part1 = document.getElementById("part1");
    var p1style = getComputedStyle(part1);
    
    
    var part2 = document.getElementById("part2");
    var p2style = getComputedStyle(part2);
    
    var part3 = document.getElementById("part3");
    var p3style = getComputedStyle(part3);
    
    
  if (p1style.display == "block" && p2style.display == "none" && p3style.display == "none") {
    part1.style.display = "none";
    part2.style.display = "block";
  } 
    else if(p1style.display == "none" && p2style.display == "block" && p3style.display == "none") {
    part2.style.display = "none";
    part3.style.display = "block";
}
}
