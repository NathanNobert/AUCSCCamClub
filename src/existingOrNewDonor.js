const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fileExists = require('file-exists')
const fs = require('fs')


alert("fjdkshfsafsfsadfdsafdasfafafa");

file = "../donorNames.txt";
alert(file);
let namesArray = [];
readTextFile(file);

/*
This function reads a .txt file and stores each line into an array to be predictively searched.
*/
function readTextFile(file){
	alert("test");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
            	//saves each line of the file into an element of the array
                var allText = rawFile.responseText.split("\n");
                namesArray += allText;
                alert(namesArray);
            }
        }
    }
    rawFile.send(null);
}

/*
Predictive search boxes that are used for first and last names
*/
var input = document.getElementById("firstName");
alert(input);
new Awesomplete(input, {
  list: namesArray
});


function moveToDonorForm() {
	document.getElementById(newdonor).innerHTML = window.location.replace("donorFormBusiness.html");
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
	var searchedFullName = document.getElementById("firstName").value;
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
	var fileToSearch = searchedFirstName + ", " + searchedLastName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch;


	if(urlExists(searchedFile)) {
		var win = new BrowserWindow({ show: false, width: 500, height: 400});
		win.loadURL(url.format({
    	pathname: path.join(__dirname, 'editDonorForm.html'), //searchedFile
    	protocol: 'file:',
    	slashes: true
  	}));
    //waiting to show the screen until now allows the screen and elements to load.
  	win.show();
  	win.maximize();
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



