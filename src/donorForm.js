/*

This file contains all the javascript used for the donorForm page.

*/

const{app, BrowserWindow} = require('electron')

const path = require ('path')

const url = require ('url')


function thankYouClick() {
	alert("HELLO");
	dialog("HI");
} 

//const {dialog} = require('electron').remote;

/*

This function reads the information from the donorForm.html file and creates a report/text document

*/

function infoStorage() {

	//var fileName = askWhereToSave();


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

			receiptCheckBox: document.getElementById("givenRecipt").value,

			thankYouCheckBox: document.getElementById("givenCard").value,

			comment: document.getElementById("commentBox").value

		}

	];//donorFormInfo



	var fs = require('fs');

	var stream = fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".txt", {'flags':'a'});

	/*stream.once('open', function(fd) {*/

	stream.write("Full Name: " + donorFormInfo[0].first + " " + donorFormInfo[0].last + "\r\n");

	stream.write("Contact Name: " + donorFormInfo[0].contact + "\r\n");

	stream.write("Email Address: " + donorFormInfo[0].email + "\r\n");

	stream.write("Phone Number: " + donorFormInfo[0].phone + "\r\n");

	stream.write("Address: " + donorFormInfo[0].addressInfo + " , " + donorFormInfo[0].cityInfo + " , " + donorFormInfo[0].postal + "\r\n");

	stream.write("Monetary amount donated: $" + donorFormInfo[0].monetary + "\r\n");

	stream.write("Non-Monetary estimated value: $" + donorFormInfo[0].nonMonetary + " The item donated: " + donorFormInfo[0].item + "\r\n");

	stream.write(donorFormInfo[0].receiptCheckBox + "  " + donorFormInfo[0].thankYouCheckBox + "\r\n" + "\r\n");

	stream.write("Comments: " + donorFormInfo[0].comment);

	stream.end();

	//});


	alert("Your information has been submitted, Thank you.", "Donor Form Submission");
	gotoMainMenu();
	

}//infoStorage


/*

Will use this function if we decide to give the user the option to choose where they want to save

their donor form files.

*/

function askWhereToSave(){

	dialog.showSaveDialog((fileName) => {

		if (fileName === undefined){

		    console.log("You didn't save the file");

		    return;

		}

	});

}//askWhereToSave

/*
This function just sends the user back to the main menu without confirmation
This is intentional because after submitting a form, just send the user back

*/

function gotoMainMenu() {
  document.getElementById(gotoMainMenu).innerHTML = window.location.replace("selectPersonType.html");
}//gotoMainMenu

function printReceipt() {
	//Save the variables in the form that you need to print the receipt. 
	let clientName = document.getElementById("firstName").value +" "+ document.getElementById("lastName").value;
	let amountOfReceipt = document.getElementById("monetaryAmount").value + document.getElementById("nonMonetaryAmount").value;
	let dateOfDonation = document.getElementById("donationDate").value;
	document.getElementById("receiptCheck").checked = true;
	if(document.getElementById("receiptCheck").checked === true){
		createAlert();
	};

	//document.getElementById(receipt).innerHTML = window.location.replace("printDonationReceipt.html");
	//Open a new Window
}//printReceipt

function createAlert(){
	alert("Name of client " + clientName +" Amount donated: "+amountOfReceipt+ " Date donated: "+dateOfDonation);
}

function createThankYouCard(){
	document.getElementById("givenCard").checked = true;
	//alert("createThankYouCard called");
}//createThankYouCard


/*
This function gets called when the user clicks the go back button, confirming if they want to go back
to the main menu.
*/
function goBackToMainMenu(){
	if(confirm("Are you sure?", "Go Back To Main Menu")){
		document.getElementById(gotoMainMenu).innerHTML = window.location.replace("selectPersonType.html");
	}
}

