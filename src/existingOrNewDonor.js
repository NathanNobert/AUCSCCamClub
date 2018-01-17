const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fileExists = require('file-exists');
var fName = 'Moop';


function moveToDonorForm() {

	document.getElementById(newdonor).innerHTML = window.location.replace("donorForm.html");
}




function urlExists(url) {
		var http = new XMLHttpRequest();
		http.open('HEAD', url, false);
		http.send();
		return http.status==200;
	}


function moveToExisistingForm() {
	const remote = require('electron').remote;
	const BrowserWindow = remote.BrowserWindow;
	var searchedFirstName = document.getElementById("firstname").value;
	var searchedLastName = document.getElementById("lastname").value;
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch;

	if(urlExists(searchedFile)) {
		var win = new BrowserWindow({ show: false, width: 500, height: 400});
		win.loadURL(url.format({
    	pathname: path.join(__dirname, 'editDonorForm.html'),
    	protocol: 'file:',
    	slashes: true
  	}));
  //waiting to show the screen until now allows the screen and elements to load.
  	win.show();
	}
	else{
		alert("File does not exist");
	}
}

function filledForm() {
	var arrayExample = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
}

	//document.getElementById(newdonor).innerHTML = window.location.replace("donorFormV2.html");

var input = document.getElementById("predictiveList");
new Awesomplete(input, {
  list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
});

