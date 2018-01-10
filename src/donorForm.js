/*
This file contains all the javascript used for the donorForm page.
*/

const{app, BrowserWindow} = require('electron')
const path = require ('path')
const url = require ('url')

/*

*/
function infoStorage() {

	var donorFormInfo = [
		{
			first: document.getElementById("firstName").value,
			last: document.getElementById("lastName").value,
			contact: document.getElementById("contactName").value,
			email: document.getElementById("emailAddress").value,
			phone: document.getElementById("phoneNumber").value,
			addressInfo: document.getElementById("address").value,
			cityInfo: document.getElementById("city").value,
			postal: document.getElementById("postalCode").value,
			monetary: document.getElementById("monetaryAmount").value,
			nonMonetary: document.getElementById("nonMonetaryAmount").value,
			item: document.getElementById("nonMonetaryItem").value,
			comment: document.getElementById("commentBox").value
		}
	];


	var fs = require('fs');
	var stream = fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".txt");
	stream.once('open', function(fd) {
	stream.write("Full Name: " + donorFormInfo[0].first + " " + donorFormInfo[0].last + "\r\n");
	stream.write("Contact Name: " + donorFormInfo[0].contact + "\r\n");
	stream.write("Email Address: " + donorFormInfo[0].email + "\r\n");
	stream.write("Phone Number: " + donorFormInfo[0].phone + "\r\n");
	stream.write("Address: " + donorFormInfo[0].addressInfo + " , " + donorFormInfo[0].cityInfo + " , " + donorFormInfo[0].postal + "\r\n");
	stream.write("Monetary amount donated: $" + donorFormInfo[0].monetary + "\r\n");
	stream.write("Non-Monetary estimated value: $" + donorFormInfo[0].nonMonetary + " The item donated: " + donorFormInfo[0].item + "\r\n" + "\r\n");
	stream.write("Comments: " + donorFormInfo[0].comment);
	stream.end();
	});
	alert("Your information has been submitted, Thank you.", "Donor Form Submission");
	gotoMainMenu();

}

/*
This function sends the user back to the login screen
*/
function gotoMainMenu() {
  document.getElementById(gotoMainMenu).innerHTML = window.location.replace("selectPersonType.html");
}
