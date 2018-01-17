const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs');

/*
This function reads a .txt file and currently stores all of the data into one array element.
*/
file = "donorNames.txt";
let namesArray = [];
readTextFile(file);
function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                namesArray += allText;
                for(var i in namesArray){
                	namesArray[i] += allText.split("\n");
                	alert(namesArray[i]);
                }
                
                alert(allText.toString());
            }
        }
    }
    rawFile.send(null);
}


function moveToDonorForm() {

	document.getElementById(newdonor).innerHTML = window.location.replace("donorLinearFormIndividual.html");

}

function moveToExisistingForm() {
	const remote = require('electron').remote;
	const BrowserWindow = remote.BrowserWindow;
	var searchedFirstName = document.getElementById("firstname").value;
	var searchedLastName = document.getElementById("lastname").value;
	var fileToSearch = searchedLastName + ", " + searchedFirstName + ".txt";
	var searchedFile = "../donorFormEntries/" + fileToSearch;

	var win = new BrowserWindow({ show: false, width: 500, height: 400 });
	win.loadURL(url.format({
    pathname: path.join(__dirname, searchedFile),
    protocol: 'file:',
    slashes: true
  }))
  //waiting to show the screen until now allows the screen and elements to load.
  win.show();
	
}

	//document.getElementById(newdonor).innerHTML = window.location.replace("donorFormV2.html");


/*
These are 2 predictive search boxes that are used for first and last names
*/
var input = document.getElementById("predictiveFirstNameList");
new Awesomplete(input, {
  list: [namesArray]
});

var input = document.getElementById("predictiveLastNameList");
new Awesomplete(input, {
  list: ["Elmer Fudd", "John Doe", "Nathan Nobert", "Jeff Jefferson", "Ruby Diamond"]
});

//"Elmer Fudd", "John Doe", "Nathan Nobert", "Jeff Jefferson", "Ruby Diamond"