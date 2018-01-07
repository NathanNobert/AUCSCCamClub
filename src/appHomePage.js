const remote = require('electron').remote
const main = remote.require('./index.js')


var attempts = 3; 

/*
This function checks to make sure the correct login information was used before sending the
user to page 2.
*/
function confirmLogin(){
  var username = document.getElementById("signInUsername").value;
  var password = document.getElementById("signInPassword").value;
  //hard coding in the usernames and password
  if (username == "admin" && password == "password"){
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
    main.openWindow('appHomePage');
    window.close();
  }
}, false)

window.maximize();


// const {app, BrowserWindow} = require('electron')
// const path = require('path')
// const url = require('url')


// let win

// /*
// This function starts the first window for the user to see the interface
// */
// function createWindow () {
//   // Create the browser window.
//   win = new BrowserWindow({show: false});

//   //sets the window to be maximized based on the screen size
//   win.maximize();

//   //Load the index.html of the app.
//   win.loadURL(url.format({
//     pathname: path.join(__dirname, 'appHomePage.html'),
//     protocol: 'file:',
//     slashes: true
//   }))

//   //waiting to show the screen until now allows the screen and elements to load.
//   win.show();

//   // Open the DevTools.
//  // win.webContents.openDevTools()

//   // Emitted when the window is closed.
//   win.on('closed', () => {
//     // Dereference the window object, usually you would store windows
//     // in an array if your app supports multi windows, this is the time
//     // when you should delete the corresponding element.
//     win = null
//   })
// }//createWindow


// app.on('ready', createWindow)

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })//app.on

// app.on('activate', () => {
//   if (win === null) {
//     createWindow()
//   }
// }) //app.on

