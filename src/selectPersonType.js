const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')



function myFunction() {
    document.getElementById("demo").innerHTML = window.location.replace("donorForm.html");
}