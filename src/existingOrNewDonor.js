const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
var opener = require("opener");


var searchedFirstName = document.getElementById("firstname").value;
var searchedLastName = document.getElementById("lastname").value;
var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
//var searchedFile = "../donorFormEntries/" + fileToSearch
var testThing = "Fudd, Elmer.txt"
var searchedFile = "../donorFormEntries/Fudd, Elmer.txt"

function moveToDonorForm() {
	document.getElementById(newdonor).innerHTML = window.location.replace("donorForm.html");
}

function moveToExisistingForm() {
	var searchedFirstName = document.getElementById("firstname").value;
	var searchedLastName = document.getElementById("lastname").value;
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch
	document.getElementById(search).innerHTML = window.location.replace(searchedFile);
}