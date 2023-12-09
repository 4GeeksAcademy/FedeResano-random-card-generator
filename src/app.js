/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  pickACard();
  document.querySelector("#button").addEventListener("click", () => {
    pickACard();
  });
};

function pickACard() {
  let suits = ["diamonds", "clubs", "hearts", "clover"];
  let cardValues = ["A", 2, ...12, "J", "Q", "K"];

  let a = Math.floor(Math.random() * suits.length - 1);
  let b = Math.floor(Math.random() * cardValues.length - 1);

  let card = {
    suit: suits[a],
    cardValue: cardValues[b],
  };

  




}
