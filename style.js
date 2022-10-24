const overlay = document.querySelector(".overlay");
const howTo = document.querySelector(".howto");
const infoBtn = document.querySelector(".info");
const closeHowTo = document.querySelector(".close-howto");
const settings = document.querySelector(".fas");
const setting = document.querySelector(".setting");
const closeSetting = document.querySelector(".close-setting");

settings.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  setting.classList.remove("hidden");
});
closeSetting.addEventListener("click", () => {
  overlay.classList.add("hidden");
  setting.classList.add("hidden");
});
infoBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  howTo.classList.remove("hidden");
});
closeHowTo.addEventListener("click", () => {
  overlay.classList.add("hidden");
  howTo.classList.add("hidden");
});
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    (!howTo.classList.contains("hidden") ||
      !setting.classList.contains("hidden"))
  ) {
    overlay.classList.add("hidden");
    howTo.classList.add("hidden");
    setting.classList.add("hidden");
  }
});
document.querySelector(".set").addEventListener("click", () => {
  const limit = Number(document.querySelector(".limit").value);
  console.log(limit);
  // console.log(Math.trunc(Math.random() * limit) + 1);
  document.querySelector(".setLimit").textContent = limit;

  let number = Math.trunc(Math.random() * limit) + 1;
  console.log(number);
  let score = 20;
  let highscore = 0;

  const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
  };
  const displayRemark = (remark) => {
    document.querySelector(".label-remark").textContent = remark;
  };

  function confirm() {
    const guess = Number(document.querySelector(".guess").value);
    // When there is no input or zero
    if (!guess) {
      document.querySelector(".score").textContent = 0;
      displayMessage("⛔️ No Number!");
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
    if (score < 19) {
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

    if (guess == number) {
      displayRemark("Hmm...");
    }
  }

  document.querySelector(".check").addEventListener("click", function () {
    confirm();
  });
  document.addEventListener("keydown", (f) => {
    if (f.key === "Enter") {
      confirm();
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
    number = Math.trunc(Math.random() * limit) + 1;
  });
});
