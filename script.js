//Part 1: Event Handling (Dark Mode Toggle)
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Game
let counter = 0;
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");

counterBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

// FAQ Section (Collapsible)
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Form Validation
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  let isValid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation (min 6 chars, must contain a number)
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password must be 6+ characters and include a number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success Message
  const formSuccess = document.getElementById("formSuccess");
  if (isValid) {
    formSuccess.textContent = " Form submitted successfully!";
    signupForm.reset();
  } else {
    formSuccess.textContent = "";
  }
});
