const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email-input");

form.addEventListener("submit", (event) => {
const email = emailInput.value.trim();

if (!isValidEmail(email)) {
    event.preventDefault();
    alert("Please enter a valid email address.");
}
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}