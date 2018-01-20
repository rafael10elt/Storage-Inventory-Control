//Global Variables
var CompanyNameInput = document.getElementById("CompanyName");
var EmailInput = document.getElementById("Email");
var PhoneInput = document.getElementById("Phone");
var AddressInput = document.getElementById("Address");
var CityInput = document.getElementById("City");
var ProvinceInput = document.getElementById("Province");


/************************************************************/

//validate Company Name--------------------------------
function validateCompanyName() {

    var errorDiv = document.getElementById("ErrorCompanyName");

    if (new RegExp(/.{1,}/).test(CompanyNameInput.value) === false) {
        errorDiv.innerHTML = "Please fill the Company Name.";
        CompanyNameInput.style.background = "rgb(255,233,233)";
    } else {

        // remove any  error styling and message
        CompanyNameInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
}

// validate entered email------------------
function validateEmail() {
   
    var errorDiv = document.getElementById("ErrorEmail");
    var emailCheck = new RegExp(/^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/);
    
    if (emailCheck.test(EmailInput.value) === false) {
        errorDiv.innerHTML = "Please provide a valid email address";
        EmailInput.style.background = "rgb(255,233,233)";
    } else {
 
        // remove any email error styling and message
         EmailInput.style.background = "";
         errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // convert email address to lowercase
        EmailInput.value = EmailInput.value.toLowerCase();
 
    }
       
 }
 
//validate Phone--------------------------------
function validatePhone() {

    var errorDiv = document.getElementById("ErrorPhone");

    if (new RegExp(/.{1,}/).test(PhoneInput.value) === false) {
        errorDiv.innerHTML = "Please fill the Phone NUmber.";
        PhoneInput.style.background = "rgb(255,233,233)";
    } else {

        // remove any  error styling and message
        PhoneInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
}
 //validate Address --------------------------------
function validateAddress() {

    var errorDiv = document.getElementById("ErrorAddress");

    if (new RegExp(/.{1,}/).test(AddressInput.value) === false) {
        errorDiv.innerHTML = "Please fill the Address.";
        AddressInput.style.background = "rgb(255,233,233)";
    } else {

        // remove any  error styling and message
        AddressInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
}

//validate City--------------------------------
function validateCity() {

    var errorDiv = document.getElementById("ErrorCity");

    if (new RegExp(/.{1,}/).test(cityInput.value) === false) {
        errorDiv.innerHTML = "Please fill this field.";
        CityInput.style.background = "rgb(255,233,233)";
    } else {

        // remove any  error styling and message
        CityInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        return true;
    }
}

function CheckForm(event) {
    if (event.preventDefault) {
        event.preventDefault(); // prevent form from submitting
    } else {
        event.returnValue = false; // prevent form from submitting in IE8
    }

    validateCompanyname();
    validateEmail();
    validatePhone();
    validateAddress();
    validateCity();    
    
    
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
