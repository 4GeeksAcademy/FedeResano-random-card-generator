import "bootstrap";
import "./style.css";

window.onload = function () {
  createCard(pickACard());
  document.querySelector("#button").addEventListener("click", () => {
    createCard(pickACard());
  });
};

// Icons : ♦ ♥ ♠ ♣

const card = {
  suits: ["diamonds", "clubs", "hearts", "clovers"],
  cardValues: [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]
};

function pickACard() {
  let a = Math.floor(Math.random() * card.suits.length);
  let b = Math.floor(Math.random() * card.cardValues.length);

  let selectedCard = {
    suit: card.suits[a],
    value: card.cardValues[b]
  };
  return selectedCard;
}

function createCard(cardObject) {
  let suitString = "";
  let valueString = cardObject.value;

  switch (cardObject.suit) {
    case "diamonds":
      suitString = "♦";
      break;
    case "hearts":
      suitString = "♥";
      break;
    case "clovers":
      suitString = "♣";
      break;
    case "clubs":
      suitString = "♠";
      break;
  }

  document.querySelector(".suit").innerHTML = suitString;
  document.querySelector(".rotated").innerHTML = suitString;

  if (cardObject.suit === "clubs" || cardObject.suit === "clovers") {
    document.querySelector(".suit").classList.add("black");
    document.querySelector(".rotated").classList.add("black");
  } else {
    document.querySelector(".suit").classList.remove("black");
    document.querySelector(".rotated").classList.remove("black");
  }

  document.querySelector(".value").innerHTML = valueString;
}
