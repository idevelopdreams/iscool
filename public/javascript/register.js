let fullName;
let dob;
let email;
let regisPassword;

const confirmPassword = document.querySelector("#confirm-password-input");
const password = document.querySelector("#password-input");
const registerForm = document.querySelector("#registration-form");
const loginForm = document.querySelector("#login-form");

// confirm password and render err until passwords match
function checkPasswordMatch() {
  if (confirmPassword.value !== password.value) {
    document.querySelector("#password-alert").style.display = "block";
  } else {
    document.querySelector("#password-alert").style.display = "none";
  }
}

// // registering users
// function registrationHandler() {
//   fullName = document.querySelector("#name-input").value.trim();
//   dob = document.querySelector("#dob-input").value.trim();
//   email = document.querySelector("#email-input").value.trim();
//   regisPassword = document.querySelector("#password-input").value.trim();
//   let data = {
//     fullname: fullName,
//     dob: dob,
//     email: email,
//     password: regisPassword
//   };

//   fetch("/signup", {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json"
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   })
//     .then(data => data.json())
//     .then(data => {
//       if (data.response) {
//         redirect: window.location.replace("/course.html");
//       } else {
//         alert("Invalid Email or Password");
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// function loginHandler() {
//   console.log("here");
//   email = document.querySelector("#userEmail").value.trim();
//   loginPassword = document.querySelector("#userPassword").value.trim();
//   let data = {
//     email: email,
//     password: loginPassword
//   };

//   fetch("/login", {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json"
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   })
//     // .then(data => data.json())
//     .then(data => {
//       console.log(data);
//       if (data.response) {
//         redirect: window.location.replace("/course.html");
//       } else {
//         alert("Invalid Email or Password");
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// // ******* events *******
confirmPassword.addEventListener("keyup", checkPasswordMatch);

// registerForm.addEventListener("click", registrationHandler);

// loginForm.addEventListener("click", loginHandler);
