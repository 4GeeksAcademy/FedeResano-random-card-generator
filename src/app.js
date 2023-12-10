import "bootstrap";
import "./style.css";

window.onload = function () {
  pickACard();
  document.querySelector("#button").addEventListener("click", () => {
    createCard(pickACard());
  });
};

// Icons : ♦ ♥ ♠ ♣

const card = {
  suits: ["diamonds", "clubs", "hearts", "clovers"],
  cardValues: ["A", 2, ...12, "J", "Q", "K"]
};


function pickACard() {

  let a = Math.floor(Math.random() * card.suits.length + 1);
  let b = Math.floor(Math.random() * card.cardValues.length + 1);

  let selectedCard = card[suits[a]][cardValues[b]];

  return selectedCard;
}


function createCard(cardObject) {
  let suitStringLeft = "";
  let suitStringRight = "";
  let valueString = cardObject[cardValues];


  switch (cardObject[suits]) {

    case "diamonds":
      suitStringLeft = '<i class="fa-solid fa-diamond fa-align-left" style="color: #ff0000;"></i>';
      suitStringRight = '<i class="fa-solid fa-diamond fa-align-right fa-rotate-90" style="color: #ff0000;"></i>';
      break;
    case "hearts":
      suitStringLeft = '';
      suitStringRight = '';
      break;
    case "clovers":
      suitStringLeft = '';
      suitStringRight = '';
      break;
    case "clubs":
      suitStringLeft = '';
      suitStringRight = '';
      break;
  }

  return suitStringLeft + " " + valueString + " " + suitStringRight;
}