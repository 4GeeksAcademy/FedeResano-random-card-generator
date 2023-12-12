import "bootstrap";
import "./style.css";

window.onload = function() {
  createCard(pickACard());
  document.querySelector("#button").addEventListener("click", () => {
    createCard(pickACard());
  });
};

// Icons : ♦ ♥ ♠ ♣

const CARD = {
  suits: ["♦", "♥", "♠", "♣"],
  cardValues: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
};

function pickACard() {
  let a = Math.floor(Math.random() * CARD.suits.length);
  let b = Math.floor(Math.random() * CARD.cardValues.length);

  let selectedCard = {
    suit: CARD.suits[a],
    value: CARD.cardValues[b]
  };
  return selectedCard;
}

function createCard(cardObject) {
  let suitString = cardObject.suit;
  let valueString = cardObject.value;

  document.querySelector(".suit").innerHTML = suitString;
  document.querySelector(".rotated").innerHTML = suitString;

  if (cardObject.suit === "♠" || cardObject.suit === "♣") {
    document.querySelector(".suit").classList.add("black");
    document.querySelector(".rotated").classList.add("black");
  } else {
    document.querySelector(".suit").classList.remove("black");
    document.querySelector(".rotated").classList.remove("black");
  }

  document.querySelector(".value").innerHTML = valueString;
}
