const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
var fs = require('fs');

function moveToDonorForm() {

	document.getElementById(newdonor).innerHTML = window.location.replace("donorFormV2.html");
}

function moveToExisistingForm() {
	const remote = require('electron').remote;
	const BrowserWindow = remote.BrowserWindow;
	var searchedFirstName = document.getElementById("firstname").value;
	var searchedLastName = document.getElementById("lastname").value;
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch;

	var win = new BrowserWindow({ show: false, width: 500, height: 400 });
	win.loadURL(url.format({
    pathname: path.join(__dirname, searchedFile),
    protocol: 'file:',
    slashes: true
  }))

  //waiting to show the screen until now allows the screen and elements to load.
  win.show();
	
}

	//document.getElementById(newdonor).innerHTML = window.location.replace("donorFormV2.html");


/*
These are 2 predictive search boxes that are used for first and last names
*/
var input = document.getElementById("predictiveFirstNameList");
new Awesomplete(input, {
  list: ["Ada", "Java", "JavaScript", "LOLCODE", "Node.js", "Ruby on Rails"]
});

var input = document.getElementById("predictiveLastNameList");
new Awesomplete(input, {
  list: ["Ada", "Java", "JavaScript", "LOLCODE", "Node.js", "Ruby on Rails"]
});