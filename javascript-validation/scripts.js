let password = document.getElementById("pswd");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    toggleBtn.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
});

//  validation

let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digits = document.getElementById("number");
let specialChar = document.getElementById("special");
let minLength = document.getElementById("length");
function checkPassword(data) {
  //javascript regular expression pattern

  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  // lowercase validation check
  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }

  // uppercase validation check
  if (upper.test(data)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }
  // number case validation check
  if (number.test(data)) {
    digits.classList.add("valid");
  } else {
    digits.classList.remove("valid");
  }
  // uppercase validation check
  if (special.test(data)) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }
  // uppercase validation check
  if (length.test(data)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
}
