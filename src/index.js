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


let win

/*
This function starts the first window for the user to see the interface
*/
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({show: false, width: 800, height: 600});

  //sets the window to be maximized based on the screen size
  //win.maximize();

  //Load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //waiting to show the screen until now allows the screen and elements to load.
  win.show();

  // Open the DevTools.
 // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}//createWindow



// const notifyBtn = document.getElementById('signInSubmit')
// notifyBtn.addEventListener('click', function (event) {
//       const modalPath = path.join('file://', __dirname, 'appHomePage.html')
//       let win = new BrowserWindow({ width: 400, height: 200 })
//       win.on('close', function () { win = null })
//       win.loadURL(modalPath)
//       win.show()
//     })


var attempt = 3; // Variable to count number of attempts.
/*
This function runs when the submit button to login is clicked. 
This checks the user entered username and password against the hard coded in info *currently*
*/
function checkLogin(){
  var username = document.getElementById("signInUsername").value;
  var password = document.getElementById("signInPassword").value;


  //hard coding in the usernames and password
  if ( username == "admin" && password == "password"){
    alert ("Login successfully");
    window.Location = "appHomePage.html"; //Brings the user to next page
    return true;
  }
  else{
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
      document.getElementById("signInUsername").disabled = true;
      document.getElementById("signInPassword").disabled = true;
      document.getElementById("signInSubmit").disabled = true;
      return false;
    }//if
  }//else
}//checkLogin



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
