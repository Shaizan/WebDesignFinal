window.onload = init; 

function init(){
     document.getElementById("nextArrowId").getElementsByClassName("nextArrow")[0].onclick = transitionImage;
    document.getElementById("branch").onclick = function() {transitionF()};
}

function transitionImage(){
    
    var part1 = document.getElementById("background1");
    var p1style = getComputedStyle(part1);
    
    
    var part2 = document.getElementById("background2");
    var p2style = getComputedStyle(part2);
    
    sleep(2000);
    
  if (p1style.display == "block" && p2style.display == "none" && p3style.display == "none") {
    part1.style.display = "none";
    part2.style.display = "block";
  } 
    else if(p1style.display == "none" && p2style.display == "block" && p3style.display == "none") {
    part2.style.display = "none";
    part3.style.display = "block";
}
}