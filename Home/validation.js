function validateForm() {
 var firstName = document.getElementById("first-name").value;
 var lastName = document.getElementById("last-name").value;
 var username = document.getElementById("username").value;
 var email = document.getElementById("email").value;
 var password = document.getElementById("password").value;
 var confirmPassword = document.getElementById("confirm-password").value;
 var birthday = document.getElementById("birthday").value;
 var gender = document.querySelector('input[name="gender"]:checked');
 var country = document.getElementById("country").value;
 var state = document.getElementById("state").value;
 var city = document.getElementById("city").value;
 var address = document.getElementById("address").value;
 var qualifications = document.querySelectorAll('input[name="qualifications"]:checked');
 var programmingSkills = document.getElementById("programming-skills").value;
 var profile = document.getElementById("profile").value;

 var errorContainer = document.getElementById("error-container");
 errorContainer.innerHTML = "";
 var errorMessages = [];

 if (firstName == "") {
  errorMessages.push("First name must be filled out");
 }
 if (lastName == "") {
  errorMessages.push("Last name must be filled out");
 }
 if (username == "") {
  errorMessages.push("Username must be filled out");
 }
 if (email == "") {
  errorMessages.push("Email must be filled out");
 }
 if (password == "") {
  errorMessages.push("Password must be filled out");
 }
 if (password != confirmPassword) {
  errorMessages.push("Passwords do not match");
 }
 if (birthday == "") {
  errorMessages.push("Birthday must be filled out");
 }
 if (!gender) {
  errorMessages.push("Gender must be selected");
 }
 if (country == "") {
  errorMessages.push("Country must be selected");
 }
 if (state == "") {
  errorMessages.push("State must be selected");
 }
 if (city == "") {
  errorMessages.push("City must be selected");
 }
 if (address == "") {
  errorMessages.push("Address must be filled out");
 }
 if (qualifications.length == 0) {
  errorMessages.push("At least one qualification must be selected");
 }
 if (programmingSkills == "") {
  errorMessages.push("Programming skills must be selected");
 }
 if (profile == "") {
  errorMessages.push("Profile must be selected");
 }

 if (errorMessages.length > 0) {
  for (var i = 0; i < errorMessages.length; i++) {
   var errorMessage = document.createElement("div");
   errorMessage.innerHTML = errorMessages[i];
   errorContainer.appendChild(errorMessage);
  }
  return false;
 }
 return true;
}

