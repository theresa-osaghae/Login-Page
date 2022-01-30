/*
***** Assignment 2: Due on Tuesday, 01/02/2022, 7:00AM *****
- Build a Simple Login Page using HTML / CSS
- Implement a functionality with Javascript where the Login Button is clicked and a popup appears with the message Login Successful and the content of the Login Button is updated to "Log Out"

***** Assignment 2: Due on Tuesday, 01/02/2022, 7:00AM *****

*/
const form = document.querySelector("form");
const emailwrapper = document.querySelector("input#wrapper");
const passwordwrapper = document.querySelector("input#wrapper");
const submitBtn = document.querySelector(".submit-btn");

// Add Event Listener to Form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.createElement("input");
  input.type = alert("Login Successful");
});


/***Event Handler Method (It didnt work)*/
// loginBtn.onclick=function () {
//    alert ("Login successful");
//     loginBtn.textContent="Logout";
// };
    
