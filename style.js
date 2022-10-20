let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input or zero
  if (!guess) {
    displayMessage("⛔️ No Number!");
  }
  // When Guess is correct
  else if (guess === number) {
    document.querySelector(".number").textContent = number;
    displayMessage("🥳 You got the number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  }
  //when Guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    }
    // when Score gets to zero
    else {
      displayMessage("Olodo You Lost");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start Guessing");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
});
