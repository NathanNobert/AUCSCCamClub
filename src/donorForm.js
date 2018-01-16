/*

This file contains all the javascript used for the donorForm page.

*/

const{app, BrowserWindow} = require('electron')

const path = require ('path')

const url = require ('url')
const fs = require('fs')
const PDFDocument = require('pdfkit')


function thankYouClick() {
	alert("HELLO");
	dialog("HI");
} 


/*

This function reads the information from the donorForm.html file and creates a report/text document

*/
function infoStorage() {

	//var fileName = askWhereToSave();

	var donorFormInfo = [{
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
		receiptCheckBox: document.getElementById("givenReceipt").value,
		thankYouCheckBox: document.getElementById("givenCard").value,
		comment: document.getElementById("commentBox").value
	}];//donorFormInfo

	var fs = require('fs');
	var stream = fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".txt"/*, {'flags':'a'}*/);

	stream.once('open', function(fd) {

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
	});


	alert("Your information has been submitted, Thank you.", "Donor Form Submission");
	makePDF(donorFormInfo);
	//gotoMainMenu();
	

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
	document.getElementById("givenReceipt").checked = true;
	createReceipt();

}//printReceipt

function createReceipt(){
	var donorFormInfo = [{
		first: document.getElementById("firstName").value,
		last: document.getElementById("lastName").value,
		phone: document.getElementById("phoneNumber").value,
		addressInfo: document.getElementById("address").value,
		dateOfDonation: document.getElementById("donationDate").value,
		cityInfo: document.getElementById("city").value,
		postal: document.getElementById("postalCode").value,
		monetary: document.getElementById("monetaryAmount").value,
		nonMonetary: document.getElementById("nonMonetaryAmount").value,
		item: document.getElementById("nonMonetaryItem").value
	}];//donorFormInfo
	// # Create a document
	doc = new PDFDocument

	doc.text("Camrose & District Boys and Girls Club");
	doc.text("4516 54 Street, Camrose, AB T4V 4W7");
	doc.text("camroseboysandgirlsclub.ca");
	doc.text("Canada Revenue Agency");
	doc.text("www.cra-arc-gc.ca/charities");
	doc.text("Reg # 118915669 RR 0001");
	doc.text("Date Received: " + donorForm[0].dateOfDonation);
	doc.text("Location: Camrose");
	doc.text("Cheque");
	doc.text("Cash");
	doc.text("Property")
	doc.text("Date of Issue: " + donorForm[0].dateOfDonation);
	doc.text("Name: " + donorFormInfo[0].first + " " + donorFormInfo[0].last);
	doc.text("Address: " + donorFormInfo[0].addressInfo);
	doc.text("City: " + donorFormInfo[0].cityInfo);
	doc.text("Prov. :" );
	doc.text("Postal Code: " + donorFormInfo[0].postal);
	doc.text("Phone: " + donorFormInfo[0].phone);
	doc.text("Dollars");
	doc.text("OFFICIAL RECEIPT FOR INCOME TAX PURPOSES");
	doc.text("A Duplicate Receipt Cannot Be Issued");
	doc.text("By:");

	// # Pipe its output somewhere, like to a file or HTTP response
	// # See below for browser usage
	doc.pipe(fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + donorForm[0].dateOfDonation + ".pdf"));

	// # Finalize PDF file
	doc.end()
}


function createThankYouCard(){
	document.getElementById("givenCard").checked = true;
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


/*
This function gets called when the user clicks the generate-pdf button,
This creates a pdf report 
*/
function makePDF(donorFormInfo){
	// # Create a document
	doc = new PDFDocument

	//doc.image('../assets/images/logoWithTextUnder.png', 320, 280, scale: 0.25);

	doc.text("Full Name: " + donorFormInfo[0].first + " " + donorFormInfo[0].last);
	doc.text("Contact Name: " + donorFormInfo[0].contact);
	doc.text("Email Address: " + donorFormInfo[0].email);
	doc.text("Phone Number: " + donorFormInfo[0].phone);
	doc.text("Address: " + donorFormInfo[0].addressInfo + " , " + donorFormInfo[0].cityInfo + " , " + donorFormInfo[0].postal);
	doc.text("Monetary amount donated: $" + donorFormInfo[0].monetary);
	doc.text("Non-Monetary estimated value: $" + donorFormInfo[0].nonMonetary + " The item donated: " + donorFormInfo[0].item);
	doc.text(donorFormInfo[0].receiptCheckBox + "  " + donorFormInfo[0].thankYouCheckBox);
	doc.text("Comments: " + donorFormInfo[0].comment);

	//doc.rect(doc.x, 0, 600, doc.y).stroke();
	// # Pipe its output somewhere, like to a file or HTTP response
	// # See below for browser usage
	doc.pipe(fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".pdf"));

	// # Finalize PDF file
	doc.end()
}

