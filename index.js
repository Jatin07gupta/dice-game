var random1=Math.random()*6;
random1=Math.floor(random1)+1;

var random2=Math.random()*6;
random2=Math.floor(random2)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+random1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");

if(random1>random2){
  document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(random1<random2){
  document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
