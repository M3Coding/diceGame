
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 Gives a random number between 1-6 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//Dice 1
var randomImage = "./images" + "/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage)
// if (randomNumber1 === 1 ) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
// }
// else if (randomNumber1 === 2 ) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
// }
// else if (randomNumber1 === 3 ) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
// }
// else if (randomNumber1 === 4 ) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
// }
// else if (randomNumber1 === 5 ) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
// }
// else {
//     document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
// }
//Dice 2
var randomImage2 = "./images" + "/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);
// if (randomNumber2 === 1 ) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
// }
// else if (randomNumber2 === 2 ) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
// }
// else if (randomNumber2 === 3 ) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
// }
// else if (randomNumber2 === 4 ) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
// }
// else if (randomNumber2 === 5 ) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
// }
// else {
//     document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
// }
//Who wins
if(randomNumber1 > randomNumber2) {
    document.querySelector(".whoWins").textContent="Player 1 Wins!🚩";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector(".whoWins").textContent="Player 2 Wins!🚩";
}
else {
    document.querySelector(".whoWins").textContent="Draw!";
}