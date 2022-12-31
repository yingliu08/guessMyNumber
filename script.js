"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//when user click check botton
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //the input user enter
  console.log(guess);
  //if no input
  if (!guess) {
    displayMessage("🤔 No number!");
  }
  //correct num
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    //change background color if input is correct
    document.querySelector("body").style.backgroundColor = "#d8bfd8";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //if the number user enter is different from correct number
  else if (guess !== secretNumber) {
    if (score > 1) {
      //if the number is greater than correct number, the message display too high
      //or the number is smaller than correct number, the message display too low
      displayMessage(guess > secretNumber ? "too high!" : "too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" Game over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//restore all data when user click again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
