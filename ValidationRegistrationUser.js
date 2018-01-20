//Global Variables
var UserFirstNameInput = document.getElementById("UserFirstName");
var UserLastNameInput = document.getElementById("UserLastName");
var pw1Input = document.getElementById("Password");
var pw2Input = document.getElementById("Confirm");


//validate User First Name--------------------------------
function validateCompanyName() {

    var errorDiv = document.getElementById("ErrorUserFirstName");

    if (new RegExp(/.{1,}/).test(UserFirstNameInput.value) === false) {
        errorDiv.innerHTML = "Please fill the Company Name.";
        UserFirstNameInput.style.background = "rgb(255,233,233)";
    } else {

        // remove any  error styling and message
        UserFirstNameInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
}


//validate User Last Name--------------------------------
function validateUserLastName() {

    var errorDiv = document.getElementById("ErrorUserLastName");

    if (new RegExp(/.{1,}/).test(UserLastNameInput.value) === false) {
        errorDiv.innerHTML = "Please fill the Company Name.";
        UserLastNameInput.style.background = "rgb(255,233,233)";
    } else {

        // remove any  error styling and message
        UserLastNameInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
}
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

    validateUserFirstNameame();
    validateUserLastName();
    validatePassword();
    
    
    alert("Customer record was created successfully.");
    }


    
/* create event listeners */
function createEventListeners() {
    var form = document.getElementById("validateform");
    if (form.addEventListener) {
        form.addEventListener("submit", CheckForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", CheckForm);
    }
}

/* run initial form configuration functions */
function setUpPage() {
    createEventListeners();
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
