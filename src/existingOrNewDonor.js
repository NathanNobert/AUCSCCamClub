const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function moveToDonorForm() {
	document.getElementById(newdonor).innerHTML = window.location.replace("donorFormV2.html");
}

var input = document.getElementById("predictiveList");
new Awesomplete(input, {
  list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
});