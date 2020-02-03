let confirmPassword = document.querySelector("#confirm-password-input");
let password = document.querySelector("#password-input");

function checkPasswordMatch() {
  if (confirmPassword.value !== password.value) {
    document.querySelector("#password-alert").style.display = "block";
  } else {
    document.querySelector("#password-alert").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  confirmPassword.addEventListener("keyup", checkPasswordMatch);
});
