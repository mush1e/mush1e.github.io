const container = document.getElementById("review-container");
function generateReviewCards() {
    container.innerHTML = "";
    reviewData.forEach((review) => { 

      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement('img');
      img.src = review.url;
      card.appendChild(img);

      const name = document.createElement("h3");
      name.textContent = review.name;
      card.appendChild(name);

      const date = document.createElement("p");
      date.textContent = review.date.toLocaleDateString();
      date.classList.add("accent")
      card.appendChild(date);

      const reviewText = document.createElement("p");
      reviewText.textContent = review.review;
      card.appendChild(reviewText);

      const rating = document.createElement("p");
      rating.textContent = "Rating: ";
      for (let i = 0; i < review.rating; i++) {
        const star = document.createElement("span");
        star.innerHTML = "&#9733;"; // Unicode star symbol
        rating.appendChild(star);
      }
      for (let i = review.rating; i < 5; i++) {
        const star = document.createElement("span");
        star.innerHTML = "&#9734;"; 
        rating.appendChild(star);
      }
      rating.classList.add("accent")
      card.appendChild(rating);

      container.appendChild(card);
    });
  }
  
  generateReviewCards();
  

  const form = document.getElementById("review-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

  const name = document.getElementById("name").value;
  const date = new Date();
  const rating = parseInt(document.getElementById("rating").value);
  const reviewText = document.getElementById("review").value;
  const url = "./public/default.svg";

  const newReview = {
    name,
    date,
    rating,
    review: reviewText,
    url,
  };

  reviewData.push(newReview);
  form.reset();

  const card = document.createElement("div");
  card.classList.add("card");
  
  const img = document.createElement("img");
  img.src = newReview.url;
  card.appendChild(img);

  const nameEl = document.createElement("h3");
  nameEl.textContent = newReview.name;
  card.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.textContent = newReview.date.toLocaleDateString();
  dateEl.classList.add("accent")
  card.appendChild(dateEl);

  const reviewTextEl = document.createElement("p");
  reviewTextEl.textContent = newReview.review;
  card.appendChild(reviewTextEl);

  const ratingEl = document.createElement("p");
  ratingEl.textContent = "Rating: ";
  for (let i = 0; i < newReview.rating; i++) {
    const star = document.createElement("span");
    star.innerHTML = "&#9733;"; // Unicode star symbol
    ratingEl.appendChild(star);
  }
  for (let i = newReview.rating; i < 5; i++) {
    const star = document.createElement("span");
    star.innerHTML = "&#9734;"; 
    ratingEl.appendChild(star);
  }
  ratingEl.classList.add("accent")
  card.appendChild(ratingEl);

  container.appendChild(card);
});
