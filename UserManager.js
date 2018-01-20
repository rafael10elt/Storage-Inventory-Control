var BtnCreateNewUser = document.getElementById("CreateNewUser");
var BtnEditUser = document.getElementById("EditUser");
var BtnDeleteUser = document.getElementById("DeleteUser");
var BtnBackPage = document.getElementById("BackPage");

function CreateNewUser_Click(){
    window.location.href='RegistrationUserScreen.html';
}

function EditUser_Click(){
    window.location.href='EditUserScreen.html';
}

function DeleteUser_Click(){
    window.location.href='DeleteUserScreen.html';
}

function BackPage_Click(){
    window.location.href='javascript:history.back()';
}

