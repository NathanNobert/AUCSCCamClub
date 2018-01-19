const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fileExists = require('file-exists');

function moveToDonorForm() {

	if(document.getElementById('formA').checked){
		document.getElementById(addnewbusiness).innerHTML = window.location.replace("donorFormBusiness.html");
	}
	if(document.getElementById('formB').checked){
		document.getElementById(addnewbusiness).innerHTML = window.location.replace("donorFormLinearBusiness.html");
	}
	if(document.getElementById('formC').checked){
		document.getElementById(addnewbusiness).innerHTML = window.location.replace("donorFormTwoColumnBusiness.html");
	}	
}



function moveToExisistingForm() {
	const remote = require('electron').remote;
	const BrowserWindow = remote.BrowserWindow;
	var searchedFirstName = document.getElementById("firstname").value;
	var searchedLastName = document.getElementById("lastname").value;
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch;

	function urlExists(url) {
		var http = new XMLHttpRequest();
		http.open('HEAD', url, false);
		http.send();
		return http.status!=404;
	}
	if(urlExists(searchedFile)) {
		alert("File Exists")
	}
	else{
		alert("File does not exist");
	}

	//var win = new BrowserWindow({ show: false, width: 500, height: 400});
	//win.loadURL(url.format({
    //pathname: path.join(__dirname, searchedFile),
    //protocol: 'file:',
    //slashes: true
  };

  //waiting to show the screen until now allows the screen and elements to load.
  //win.show();

	//document.getElementById(newdonor).innerHTML = window.location.replace("donorFormV2.html");

var input = document.getElementById("predictiveList");
new Awesomplete(input, {
  list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
});