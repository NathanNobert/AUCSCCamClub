const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs');

/*
Currently we cannot read in a file to update the array of predictive search
*/



// var txtFile = "./donorNames.txt"
// var file = new File(txtFile);

// file.open("r"); // open file with read access
// var str = "";
// while (!file.eof) {
// 	// read each line of text
// 	str += file.readln() + "\n";
// }
// file.close();
// alert(str);

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
  list: ["Elmer Fudd", "John Doe", "Nathan Nobert", "Jeff Jefferson", "Ruby Diamond"]
});

var input = document.getElementById("predictiveLastNameList");
new Awesomplete(input, {
  list: ["Elmer Fudd", "John Doe", "Nathan Nobert", "Jeff Jefferson", "Ruby Diamond"]
});