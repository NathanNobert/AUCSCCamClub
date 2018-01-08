const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')



function openNextPage(idOfButton) {
	if(idOfButton === 'Donors'){
    	document.getElementById(idOfButton).innerHTML = window.location.replace("donorForm.html");
	}else if(idOfButton === 'volunteer'){
		document.getElementById(idOfButton).innerHTML = window.location.replace("volunteerForm.html")
	}else{
		document.getElementById(idOfbutton).innterHTML = window.location.replace("memberForm.html")
	}
}