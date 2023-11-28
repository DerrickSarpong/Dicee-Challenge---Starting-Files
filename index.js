var randomNum1 = Math.floor(Math.random() * 6) + 1;
var diceImageDir1 = "images/dice" + randomNum1 + ".png";
var loc1 = document.querySelectorAll("img")[0];
loc1.setAttribute("src", diceImageDir1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var diceImageDir2 = "images/dice" + randomNum2 + ".png";
var loc2 = document.querySelectorAll("img")[1];
loc2.setAttribute("src", diceImageDir2);

if(randomNum1 > randomNum2) {
   document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNum1 < randomNum2) {
   document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
   document.querySelector("h1").innerHTML = "Draw";
}