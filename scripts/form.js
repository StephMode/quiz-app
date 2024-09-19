// const for card creation fn

const form = document.querySelector("[data-js=form]");
const cardArea = document.querySelector("[data-js=card-area]");

// const for text counter

const questionTextArea = document.querySelector(
  "[data-js=form-input-question]"
);
const answerTextArea = document.querySelector("[data-js=form-input-answer]");
const questionCount = document.querySelector("[data-js='question-count']");

// function counter

function setCounter(event) {
  const counter = document.querySelector(
    `[data-js='${event.target.name}-count']`
  );
  counter.textContent = `${150 - event.target.value.length} characters left`;
}

// function for creation of new cards using innerHTML

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = `
  <i
          class="card--icon card--icon--not-added material-icons"
          data-js="card-icon"
        ></i>
        <h2 class="card-question">${data.question}       
        </h2>
        <button
          class="card-button card-button--answer-hidden-state"
          data-js="card-button"
          type="button"
        ></button>
        <p class="card-answer" data-js="card-answer">
        ${data.answer}
        </p>
        <ul class="card-tag-list">
          <li>#${data.tag}</li>
        </ul>`;
  cardArea.append(card);
  event.target.reset();
});
