const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thankyou-container");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll('.btn');
const submittedRating = document.querySelector(".selected-rating");



ratings.forEach((rate) => {
    rate.addEventListener("click", () => {
        //console.log(rate.innerHTML);
        submittedRating.innerHTML = rate.innerHTML;
        submitButton.addEventListener("click", () => {
            ratingContainer.style.display = "none";
            thankYouContainer.classList.remove("hidden");    
        })
    })
})