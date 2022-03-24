const cardFinal = document.querySelector(".card--thankyou");
const ratingBtn = document.querySelectorAll(".rating");
const ratingSelected = document.querySelector(".selected__rating");
const submitBtn = document.querySelector(".card__btn");

let ratingvalue;
function showRating(value) {
  ratingSelected.innerText = `You selected ${ratingValue} out of 5`;
}

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    for (rating of ratingBtn) {
      if (rating.classList.contains("rating--selected")) {
        rating.classList.remove("rating--selected");
      }
    }
    e.currentTarget.classList.toggle("rating--selected");
    ratingValue = parseInt(e.currentTarget.innerText);
    showRating(ratingValue);
  });
});

submitBtn.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.add("hidden");
  cardFinal.classList.remove("hidden");
});
