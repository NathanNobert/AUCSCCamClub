const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fileExists = require('file-exists');
const fs = require('fs');


file = "../donorNames.txt";
let namesArray = [];
readTextFile(file);

/*
This function reads a .txt file and stores each line into an array to be predictively searched.
*/
//
function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
            	//saves each line of the file into an element of the array
                var allText = rawFile.responseText.split("\n");
                namesArray += allText;
            }//if(rawFile.status === 200 || rawFile.status == 0)
        }//if(rawFile.readtState === 4)
    }//rawFile.onreadystatechange = function ()
    rawFile.send(null);
}//readTextFile(file)


function moveToDonorForm() {
	if(document.getElementById('formA').checked){
		document.getElementById(newdonor).innerHTML = window.location.replace("donorFormIndividual.html");
	}//if
	if(document.getElementById('formB').checked){
		document.getElementById(newdonor).innerHTML = window.location.replace("donorFormLinearIndividual.html");
	}//if
	if(document.getElementById('formC').checked){
		document.getElementById(newdonor).innerHTML = window.location.replace("donorFormTwoColumnIndividual.html");
	}//if
}//moveToDonorForm()



//Checks is a file exists within the application
function urlExists(url) {
		var http = new XMLHttpRequest();
		http.open('HEAD', url, false);
		http.send();
		return http.status==200;
	}//urlExists(url)
//Opens the form of the searched business
function moveToExisistingForm() {
	const remote = require('electron').remote;
	const BrowserWindow = remote.BrowserWindow;
	var searchedFullName = document.getElementById("firstname").value;
	var i = 0;
	var searchedFirstName = "";
	//Builds the first name with the first part of the inputted name
	while(searchedFullName.charAt(i) != " "){
		searchedFirstName = searchedFirstName + searchedFullName.charAt(i);
		i = i + 1;
	}//while

	var searchedLastName = "";

	for(counter = i + 1; counter < searchedFullName.length; counter++){
		searchedLastName = searchedLastName + searchedFullName.charAt(counter);
	}//for
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch;


	if(urlExists(searchedFile)) {
		var win = new BrowserWindow({ show: false, width: 500, height: 400});
		win.loadURL(url.format({
    	pathname: path.join(__dirname, 'editDonorForm.html'),
    	protocol: 'file:',
    	slashes: true
  	})); //if(urlExists(searchedFile))
    //waiting to show the screen until now allows the screen and elements to load.
  	win.show();
  	win.maximize();
	}//if
	else{
		alert("File does not exist");
	}//else
}//moveToExistingForm()


function filledForm() {
	var fName = ['Amy', '', '', '', '',];
		window.onload=function(){
		document.getElementById('firstName').value=fName[0];
		document.getElementById('lastName').value='Weber';
		document.getElementById('contactName').value='Business';
		document.getElementById('emailAddress').value='amy@weber.com';
		document.getElementById('phoneNumber').value='0123456789';
		document.getElementById('donationDate').value='2018-01-01';
		document.getElementById('address').value='123 Fake Street';
		document.getElementById('city').value='Camrose';
		document.getElementById('postalCode').value='123456';
		document.getElementById('monetaryAmount').value='100';
		document.getElementById('nonMonetaryItem').value='Bench';
		document.getElementById('nonMonetaryAmount').value='100';}
}//filledForm()

	//document.getElementById(newdonor).innerHTML = window.location.replace("donorFormV2.html");


/*
These are 2 predictive search boxes that are used for first and last names
*/
var input = document.getElementById("firstName");

new Awesomplete(input, {
  list: namesArray
});
