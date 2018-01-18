const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs');


file = "../donorNames.txt";
let namesArray = [];
readTextFile(file);

/*
This function reads a .txt file and stores each line into an array to be predictively searched.
*/
function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
            	//saves each line of the file into an element of the array
                var allText = rawFile.responseText.split("\n");
                namesArray += allText;
            }
        }
    }
    rawFile.send(null);
}


function moveToDonorForm() {

	document.getElementById(newdonor).innerHTML = window.location.replace("donorForm.html");

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
  list: namesArray
});

var input = document.getElementById("predictiveLastNameList");
new Awesomplete(input, {
  list: namesArray
});
