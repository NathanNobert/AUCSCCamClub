const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

var searchedFirstName = document.getElementById("firstname").value;
var searchedLastName = document.getElementById("lastname").value;
var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
var searchedFile = "../donorFormEntries/" + fileToSearch

function moveToDonorForm() {
	document.getElementById(newdonor).innerHTML = window.location.replace("donorForm.html");
}

function moveToExisistingForm() {
	const remote = require('electron').remote;
	const BrowserWindow = remote.BrowserWindow;
	var searchedFirstName = document.getElementById("firstname").value;
	var searchedLastName = document.getElementById("lastname").value;
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch
	var win = new BrowserWindow({ show: false, width: 800, height: 600 });
	win.loadURL(url.format({
    pathname: path.join(__dirname, searchedFile),
    protocol: 'file:',
    slashes: true
  }))

  //waiting to show the screen until now allows the screen and elements to load.
  win.show();
	
}