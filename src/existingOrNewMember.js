const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function moveToMemberForm() {
	document.getElementById(newmember).innerHTML = window.location.replace("memberForm.html");
}