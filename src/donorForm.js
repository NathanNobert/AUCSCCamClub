/*
This file contains all the javascript used for the donorForm page.
*/
const{app, BrowserWindow} = require('electron')
const path = require ('path')
const url = require ('url')
const fs = require('fs')
const PDFDocument = require('pdfkit')
const swal = require('sweetalert2')


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
		donationDate: document.getElementById("donationDate").value,
		monetary: document.getElementById("monetaryAmount").value,
		nonMonetary: document.getElementById("nonMonetaryAmount").value,
		item: document.getElementById("nonMonetaryItem").value,
		receiptCheckBox: document.getElementById("givenReceipt").value,
		thankYouCheckBox: document.getElementById("givenCard").value,
		comment: document.getElementById("commentBox").value
	}];//donorFormInfo

	var fs = require('fs');
	var stream = fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".txt");
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

	swal(
		'Thank you for your submission',
		'Your PDF is generated and saved',
		'success'
	)

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


/*
This function creates a receipt - worked on by Katharina
*/
function printReceipt() {
	//Save the variables in the form that you need to print the receipt. 
	let clientName = document.getElementById("firstName").value +" "+ document.getElementById("lastName").value;
	let amountOfReceipt = document.getElementById("monetaryAmount").value + document.getElementById("nonMonetaryAmount").value;
	let dateOfDonation = document.getElementById("donationDate").value;
	alert("Name of client " + clientName +" Amount donated: "+amountOfReceipt+ " Date donated: "+dateOfDonation);

	document.getElementById(receipt).innerHTML = window.location.replace("printDonationReceipt.html");
	//Open a new Window
}//printReceipt


/*
This function gets called when the user clicks the go back button, confirming if they want to go back
to the main menu.
*/
function goBackToMainMenu(){

	//dialog box
	swal({
  title: 'Are you sure you want to go back?',
  text: "You won't be able to save this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'go back!',
  cancelButtonText: 'cancel!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: false,
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    swal(
      'Going back!',
      'Nothing is saved.',
      'success'
    ) 
    document.getElementById(gotoMainMenu).innerHTML = window.location.replace("selectPersonType.html");
  // result.dismiss can be 'cancel', 'overlay',
  // 'close', and 'timer'
  } else if (result.dismiss === 'cancel') {
    swal(
      'Cancelled',
      ' ',
      'error'
    )
  }
})

}//goBackToMainMenu()

/*
This function gets called when the user clicks the submit form button,
This creates a pdf report 
*/
function makePDF(donorFormInfo){
	//Create a document
	doc = new PDFDocument

	doc.image('assets/images/logo B&G long.jpg', {
			fit: [500, 300],
			align: 'center',
			valign: 'top'
		});//doc.image

	doc.text("Full Name: " + donorFormInfo[0].first + " " + donorFormInfo[0].last);
	doc.text("Contact Name: " + donorFormInfo[0].contact);
	doc.text("Email Address: " + donorFormInfo[0].email);
	doc.text("Phone Number: " + donorFormInfo[0].phone);
	doc.text("Address: " + donorFormInfo[0].addressInfo + " , " + donorFormInfo[0].cityInfo + " , " + donorFormInfo[0].postal);
	doc.text("Monetary amount donated: $" + donorFormInfo[0].monetary);
	doc.text("Non-Monetary estimated value: $" + donorFormInfo[0].nonMonetary + " The item donated: " + donorFormInfo[0].item);
	doc.text(donorFormInfo[0].receiptCheckBox + "  " + donorFormInfo[0].thankYouCheckBox);
	doc.text("Comments: " + donorFormInfo[0].comment);

	doc.pipe(fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".pdf"));

	//Finalize PDF file
	doc.end()
}

/*
This function gets called when the user clicks the Generates a Thank you card button,
This creates a pdf card
*/
function thankYouClick(donorFormInfo) {

	var donorFormInfo = [{
		first: document.getElementById("firstName").value,
		last: document.getElementById("lastName").value,
		donationDate: document.getElementById("donationDate").value,

	}];//donorFormInfo

	doc = new PDFDocument

	//This creates dialogs with text are and confirmation 
	swal({
		title: 'Add you personal message here:',
		input: 'textarea',
		showCancelButton: true,
		confirmButtonText: 'Submit',
		showLoaderOnConfirm: true,
		preConfirm: (textarea) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					if (textarea === 'taken@example.com') {
						swal.showValidationError(
							'This email is already taken.'
							)
					}
					resolve()
				}, 2000)
			})//Promise(resolve)
		},//preConfirm: (textarea)
		allowOutsideClick: () => !swal.isLoading()
	}).then((result) => {
		if (result.value) {
			swal({
				type: 'success',
				title: 'You Card Has Been Created',
				html: 'your personal message was: ' + result.value
			})
		}//if
		doc = new PDFDocument

		//This adds the image
		doc.image('assets/images/logo B&G long.jpg', {
			fit: [500, 300],
			align: 'center',
			valign: 'center'
		});//doc.image

		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text("Dear" + donorFormInfo[0].first + ", " + donorFormInfo[0].last + "");
		doc.text(" ");
		doc.text(" ");
		doc.text("On behalf of of Camrose Boys And Girls Club, I would like to thank you for your genrous donation on " + donorFormInfo[0].donationDate);
		doc.text(" ");
		doc.text("Camrose Boy And Girls Club relies on the genrousity of donors such as yourself and is grateful for your support");
		doc.text(" ");
		doc.text(result.value);
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text("Thank you once again");
		doc.text(" ");
		doc.text(" ");
		doc.text(" ");
		doc.text("Sincerely, Camrose Boys And Girls Club \n");

		doc.pipe(fs.createWriteStream("thankYouCardsEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".pdf"));

		//Finalize PDF file
		doc.end()
	})
}//thankYouClick()

