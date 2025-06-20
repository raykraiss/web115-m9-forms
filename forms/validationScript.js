// JavaScript code for form validation

// define variables for form elements
let myForm = document.getElementById("myForm");
let subBtn = document.getElementById("subBtn");

// create p element for error message
let message = document.createElement("p");
myForm.appendChild(message);

// Regular expression pattern for alphanumeric input
let regex = /^[a-zA-Z0-9]*$/;

// Retrieve the input field value
myForm.subBtn.addEventListener("click", function validateForm() {
  let inputField = myForm.elements.inputField.value;

  // Check if the input value matches the pattern
  if (!regex.test(inputField)) {
    // Invalid input: display error message
    message.innerHTML = "Input must be alphanumeric";
    message.style.color = "red";
    // Prevent form from submitting
    myForm.addEventListener("submit", function (event) {
      event.preventDefault();
    })
  } else {
    // Valid input: display confirmation and submit the form
    myForm.submit();
    window.alert("Form submitted!");
  }
})
