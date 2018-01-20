//Global Variables
var pw1Input = document.getElementById("Password");
var pw2Input = document.getElementById("Confirm");

/************************************************************/
// validate entered password---------------
function validatePassword() {

    var errorDiv = document.getElementById("passwordError");
  
 //      if (pw1Input.value.length < 6) {
       if (new RegExp(/.{6,}/).test(pw1Input.value) === false) {
           errorDiv.innerHTML = "Password must be at least 6 characters";
           pw1Input.style.background = "rgb(255,233,233)";
           pw2Input.style.background = "rgb(255,233,233)";
       } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
           errorDiv.innerHTML = "Passwords must match";
           pw1Input.style.background = "rgb(255,233,233)";
           pw2Input.style.background = "rgb(255,233,233)";
       } else if (new RegExp(/[a-zA-Z]/).test(pw1Input.value) === false) {
           errorDiv.innerHTML = "Password must contain at least one letter";
           pw1Input.style.background = "rgb(255,233,233)";
           pw2Input.style.background = "rgb(255,233,233)";
       } else if (new RegExp(/\d/).test(pw1Input.value) === false) {
           errorDiv.innerHTML = "Password must contain at least one number";
           pw1Input.style.background = "rgb(255,233,233)";
           pw2Input.style.background = "rgb(255,233,233)";
       } else 
      {
       // remove any password error styling and message
       pw1Input.style.background = "";
       pw2Input.style.background = "";
       errorDiv.style.display = "none";
       errorDiv.innerHTML = "";
       // copy valid password to profile object
       profile.password = pw1Input.value;
    }
 
 }
function CheckForm(event) {
    if (event.preventDefault) {
        event.preventDefault(); // prevent form from submitting
    } else {
        event.returnValue = false; // prevent form from submitting in IE8
    }

    validateCompanyname();
    validateBIN();
    validateEmail();
    validatePhone();
    validateAddress();
    validateCity();    
    validatePostal();
 
    
    alert("Customer record was created successfully.");
    }
