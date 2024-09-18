console.clear();

const cardIcon = document.querySelector('[data-js="card-icon"]');

cardIcon.addEventListener("click", () => {
  //   cardIcon.classList.remove("card--icon--not-added");
  cardIcon.classList.toggle("card--icon--added");
  //   initial mistake: I called the class in () with ::before, however ::before isn't needed
  console.log("button pressed");
});
