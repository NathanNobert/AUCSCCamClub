const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function moveToVolunteerForm() {
	document.getElementById(newvolunteer).innerHTML = window.location.replace("volunteerForm.html");
}