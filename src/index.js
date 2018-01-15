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
  //this disables the standard menu bar
  app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
  });



  // Create the browser window.
  win = new BrowserWindow({show: false, width: 800, height: 600});

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
  let win = new BrowserWindow({show: false});
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


 const fs = require('fs');

// let lyrics = 'But still I\'m having memories of high speeds when the cops crashed\n' +  
//              'As I laugh, pushin the gas while my Glocks blast\n' + 
//              'We was young and we was dumb but we had heart';

// const defaults = {
//   flags: 'w',
//   encoding: 'utf8',
//   fd: null,
//   mode: 0o666,
//   autoClose: true
// };




// fs.writeFile('test.pdf', lyrics, (err) => {  
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//     console.log('pdf created!');
// });



const PDFDocument = require('pdfkit')

// # Create a document
doc = new PDFDocument

// # Pipe its output somewhere, like to a file or HTTP response
// # See below for browser usage
doc.pipe(fs.createWriteStream('sample.pdf'));


// # Add another page
doc.addPage()
   .fontSize(25)
   .text('Here is some vector graphics...', 100, 100)

// # Draw a triangle
doc.save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill("#FF3300")

// # Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc.scale(0.6)
   .translate(470, -380)
   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
   .fill('red', 'even-odd')
   .restore()


// # Finalize PDF file
doc.end()