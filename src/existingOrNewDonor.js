const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fileExists = require('file-exists');
const fs = require('fs');



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
	var searchedFullName = document.getElementById("firstname").value;
	var i = 0;
	var searchedFirstName = "";

	while(searchedFullName.charAt(i) != " "){
		searchedFirstName = searchedFirstName + searchedFullName.charAt(i);
		i = i + 1;
	}

	var searchedLastName = "";

	for(counter = i + 1; counter < searchedFullName.length; counter++){
		searchedLastName = searchedLastName + searchedFullName.charAt(counter);
	}
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch;


	if(urlExists(searchedFile)) {
		var win = new BrowserWindow({ show: false, width: 500, height: 400});
		win.loadURL(url.format({
    	pathname: path.join(__dirname, searchedFile),
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
	var fName = ['Timmy', '', '', '', '',];
		window.onload=function(){
		document.getElementById('firstName').value=fName[0];
		document.getElementById('lastName').value='Last Name';
		document.getElementById('contactName').value='Firsty';
		document.getElementById('emailAddress').value='M@gmail.R';
		document.getElementById('phoneNumber').value='1234567890';
		document.getElementById('donationDate').value='1990-09-09';
		document.getElementById('address').value='123 Fake Street';
		document.getElementById('city').value='Fake City';
		document.getElementById('postalCode').value='FFF FFF';
		document.getElementById('monetaryAmount').value='2000';
		document.getElementById('nonMonetaryItem').value='Bench';
		document.getElementById('nonMonetaryAmount').value='200';}
}

	//document.getElementById(newdonor).innerHTML = window.location.replace("donorFormV2.html");

var input = document.getElementById("predictiveList");

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