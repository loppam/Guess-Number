let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const displayRemark = (remark) => {
  document.querySelector(".label-remark").textContent = remark;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input or zero
  if (!guess) {
    displayMessage("⛔️ No Number!");
    document.querySelector(".score").textContent = 0;
    displayRemark("You need put number na");
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
  //Abusive Comments🤭🤭🤭
  if (score == 20) {
    displayRemark("😎 Agba Baller");
  }
  if (score == 19) {
    displayRemark("😅 You can do it");
  }
  if (score == 18) {
    displayRemark("😗 Try Harder");
  }
  if (score == 17) {
    displayRemark("🤷🏾 Are you Even Trying?");
  }
  if (score == 16) {
    displayRemark("🧐 You no Know Book?");
  }
  if (score == 15) {
    displayRemark("🤐 Try Thinking‼");
  }
  if (score == 14) {
    displayRemark("😭 You don dey lose oo");
  }
  if (score <= 13) {
    displayRemark("😭 You no Know anyhting!");
  }
  if (score <= 9) {
    displayRemark("😭OLODO😭");
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start Guessing");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  displayRemark("Hmm...");
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
});
