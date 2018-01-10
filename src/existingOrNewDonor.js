const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function moveToDonorForm() {
	document.getElementById(newdonor).innerHTML = window.location.replace("donorForm.html");
}

function openFileFromSearch() {
	var searchedFirstName = document.getElementById("firstname").value;
	var searchedLastName = document.getElementById("lastname").value;
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	document.getElementById(search).innerHTML = window.location.replace("testIfFileNameSaves.html");
}