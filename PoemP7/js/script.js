window.onload = init; 

function init(){
console.log("hello!")	

	var ball = document.getElementById("ball"); 
	
	TweenMax.fromTo(ball, 1, {x:500, y:150}, {y: 500, ease: Bounce.easeOut}); 
	TweenMax.to(ball, 0.5, {scale:2, delay:3}); 
	TweenMax.to(ball, 0.5, {borderRadius:"20%", rotation: 180,  delay:3}); 
}
