const passwordOutput = document.querySelector("#passwordOutput");
const copyBtn = document.querySelector("#copyBtn");
const lengthRange = document.querySelector("#lengthRange");
const lengthValue = document.querySelector("#lengthValue");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generateBtn");
const strengthText = document.querySelector("#strengthText");
const strengthFill = document.querySelector("#strengthFill");
const message = document.querySelector("#message");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", copyPassword);

function generatePassword() {
  let characters = "";
  let password = "";
  const length = Number(lengthRange.value);

  if (uppercaseCheck.checked) {
    characters += uppercaseLetters;
  }

  if (lowercaseCheck.checked) {
    characters += lowercaseLetters;
  }

  if (numbersCheck.checked) {
    characters += numbers;
  }

  if (symbolsCheck.checked) {
    characters += symbols;
  }

  if (characters === "") {
    message.textContent = "Please select at least one option.";
    passwordOutput.value = "";
    updateStrength(0);
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordOutput.value = password;
  message.textContent = "Password generated successfully.";
  checkStrength(password);
}

function copyPassword() {
  if (passwordOutput.value === "") {
    message.textContent = "There is no password to copy.";
    return;
  }

  navigator.clipboard.writeText(passwordOutput.value);
  message.textContent = "Password copied!";
}

function checkStrength(password) {
  let score = 0;

  if (password.length >= 12) {
    score++;
  }

  if (/[A-Z]/.test(password)) {
    score++;
  }

  if (/[a-z]/.test(password)) {
    score++;
  }

  if (/[0-9]/.test(password)) {
    score++;
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
  }

  updateStrength(score);
}

function updateStrength(score) {
  if (score <= 2) {
    strengthText.textContent = "Weak";
    strengthFill.style.width = "33%";
    strengthFill.style.background = "#ef4444";
  } else if (score <= 4) {
    strengthText.textContent = "Medium";
    strengthFill.style.width = "66%";
    strengthFill.style.background = "#facc15";
  } else {
    strengthText.textContent = "Strong";
    strengthFill.style.width = "100%";
    strengthFill.style.background = "#22c55e";
  }

  if (score === 0) {
    strengthText.textContent = "-";
    strengthFill.style.width = "0%";
    strengthFill.style.background = "gray";
  }
}