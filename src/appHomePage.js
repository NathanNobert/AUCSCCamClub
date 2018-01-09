const remote = require('electron').remote
const main = remote.require('./index.js')


var attempts = 3; 
var userNameOfClient = "";
var passwordOfClient = "";
/*
This function checks to make sure the correct login information was used before sending the
user to page 2.
*/
function confirmLogin(){
  var username = document.getElementById("signInUsername").value;
  var password = document.getElementById("signInPassword").value;

  //hard coding in the usernames and password

  if (username == userNameOfClient && password == passwordOfClient){
    return true;
  }else{
    attempts--;
    alert("Incorrect login. You have left " + attempts + " attempts left");
    //Doesn't allow user to try again after 3 fails
    if(attempts < 1){
      document.getElementById("signInUsername").disabled = true;
      document.getElementById("signInPassword").disabled = true;
      document.getElementById("signInSubmit").disabled = true;
      return false;
    }//if
    return false;
  }//else
}
  
/*
This listens for the submit button of the login page to be clicked
*/
signInSubmit.addEventListener('click', () => {
  if(confirmLogin() == true){
    var window = remote.getCurrentWindow();
    main.openWindow('selectPersonType'); //appHomePage
    window.close();
  }
}, false);

/*
This function theoretically changes the password if the old password is correct.
This will not work without a server to store the password or a database
*/
function submitChangePassword(){
  if(document.getElementById("oldPassword").value == passwordOfClient){
    passwordOfClient = document.getElementById("newPassword").value;;
  }
  alert("Password Changed!");

}
