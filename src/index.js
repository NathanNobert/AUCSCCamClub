/**
AUCSC320 Camrose Boys & Girls Club App.
Started January 4th, 2018.
Group:
  Nathan Nobert - Team Leader, Programmer, Tester
  Fatima Bin Sumait - Programmer, Tester
  Jack Shea - Programmer, Tester
  Katharina Reddecop - Programmer, Tester

This is our main Javascript file used for the starting point of our app.
The framework we are using to run our Desktop/Web App on is Electron, this is a packaging
framework that uses HTML, CSS, Javascript, and Node.js to build and applications.

Methods/Functions:
  createWindow()
    -This creates our main application window


Known Bugs:
  -
*/
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs');
const swal = require('sweetalert2')

let win


/*
This function starts the first window for the user to see the interface
*/
function createWindow () {
  //this disables the standard menu bar
  app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
  });



  // Create the browser window.
  win = new BrowserWindow({show: false, width: 800, height: 600, backgroundColor: '#0099cc'});

  //Load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //waiting to show the screen until now allows the screen and elements to load.
  win.show();



  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}//createWindow


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})//app.on

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
}) //app.on


/*
This opens the new window after log in information is submitted correctly within the appHomePage.js file
*/
exports.openWindow = (filename) => {
  let win = new BrowserWindow({show: false, backgroundColor: '#0099cc'});
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'selectPersonType.html'), //next page
    protocol: 'file:',
    slashes: true
  }))
  win.maximize();
  win.show();
}//exports

/*
This function sends the user to the screen that allows them to change the password
*/
function changePassword() {

  document.getElementById(gotoChangePassword).innerHTML = window.location.replace("changePassword.html");
}//changePassword

/*
This function sends the user back to the login screen
*/
function gotoSignInPage() {
  document.getElementById(gotoSignInPage).innerHTML = window.location.replace("index.html");
}//gotoSignInPage

/*
This functions sends the user to the options page
*/
function gotoOptionsPage() {
  document.getElementById(gotoSignInPage).innerHTML = window.location.replace("optionsPage.html");
}

/*
This function just sends the user back to the main menu without confirmation
This is intentional because after submitting a form, just send the user back

*/

function gotoMainMenu() {
  document.getElementById(gotoMainMenu).innerHTML = window.location.replace("selectPersonType.html");
}//gotoMainMenu


/*
This function gets called when the user clicks the go back button, confirming if they want to go back
to the main menu.
*/
function goBackToMainMenu(){


  swal({
  title: 'Are you sure you want to go back?',
  text: "You won't be able to save this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'go back!',
  cancelButtonText: 'cancel!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: false,
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    swal(
      'Going back!',
      'Nothing is saved.',
      'success'
    ) 
    document.getElementById(gotoMainMenu).innerHTML = window.location.replace("selectPersonType.html");
  // result.dismiss can be 'cancel', 'overlay',
  // 'close', and 'timer'
  } else if (result.dismiss === 'cancel') {
    swal(
      'Cancelled',
      ' ',
      'error'
    )
  }
})

}