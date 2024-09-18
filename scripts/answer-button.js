console.log("h");

const answerButton = document.querySelector('[data-js="card-button"]');
const cardAnswer = document.querySelector("[data-js=card-answer]");
const cardArea = document.querySelector("[data-js=card-area]");

// there is a diffrence between querySelector and querySelectorAll

// tried it with cardArea, but didn't work yet, maybe have to revisit after later sessions

answerButton.addEventListener("click", () => {
  console.log("answer button clicked");
  answerButton.classList.toggle("card-button--answer-displayed-state");
  cardAnswer.classList.toggle("card-answer--shown");
});

// es gibt auch mit forEach und event.target die Möglichkeit, die Karten einzeln anklickbar zu machen
// zum 18.09. aber erstmal out of scope
