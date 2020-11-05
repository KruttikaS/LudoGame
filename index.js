// dice1
var randomNumber1= (Math.floor(Math.random() * 6)) + 1;
for(i=1;i<=6;i++){
   document.querySelector(".img1").src = ("images/dice" + randomNumber1 +".png");
}
/*if(randomNumber1===1){
   document.getElementsByClassName("img1").src = ("images/dice1.png");
}
else if(randomNumber1===2){
   document.getElementsByClassName("img1").src = ("images/dice2.png");
}
else if(randomNumber1===3){
   document.getElementsByClassName("img1").src = ("images/dice3.png");
}
else if(randomNumber1===4){
   document.getElementsByClassName("img1").src = ("images/dice4.png");
}
else if(randomNumber1===5){
   document.getElementsByClassName("img1").src = ("images/dice5.png");
}
else if(randomNumber1===6){
   document.getElementsByClassName("img1").src = ("images/dice6.png");
} */


/*if(randomNumber1===1)
{
  document.querySelector(".img1").src= ("images/dice1.png");
}
else if(randomNumber1===2)
{
  document.querySelector(".img1").src= ("images/dice2.png");
}
else if(randomNumber1===3)
{
  document.querySelector(".img1").src= ("images/dice3.png");
}
else if(randomNumber1===4)
{
  document.querySelector(".img1").src= ("images/dice4.png");
}
else if(randomNumber1===5)
{
  document.querySelector(".img1").src= ("images/dice5.png");
}
else if(randomNumber1===6)
{
  document.querySelector(".img1").src= ("images/dice6.png");
} */


// dice2
var randomNumber2= (Math.floor(Math.random() * 6)) + 1;
for(i=1;i<=6;i++){
   document.querySelector(".img2").src = ("images/dice" + randomNumber2 +".png");
}

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}
