const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginBtn.onclick = () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
};

signupBtn.onclick = () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

// Email validation function
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Login Validation
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  loginEmailError.textContent = "";
  loginPasswordError.textContent = "";

  if (email === "") {
    loginEmailError.textContent = "Email is required";
    valid = false;
  } else if (!isValidEmail(email)) {
    loginEmailError.textContent = "Invalid email format";
    valid = false;
  }

  if (password === "") {
    loginPasswordError.textContent = "Password is required";
    valid = false;
  }

  if (valid) {
    alert("Login Successful!");
    loginForm.reset();
  }
});

// Signup Validation
signupForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();
  const confirmPassword = confirmPassword.value.trim();

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Signup Successful!");
    signupForm.reset();
  }
});