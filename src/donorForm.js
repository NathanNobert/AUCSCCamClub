/*
This file contains all the javascript used for the donorForm page.
*/

const{app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
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
		email: document.getElementById("emailAddress").value,
		phone: document.getElementById("phoneNumber").value,
		addressInfo: document.getElementById("address").value,
		cityInfo: document.getElementById("city").value,
		provinceInfo: document.getElementById("province").value,
		postal: document.getElementById("postalCode").value,
		donationDate: document.getElementById("donationDate").value,
		monetary: document.getElementById("monetaryAmount").value,
		chequeInfo: document.getElementById("cheque").value,
		cashInfo: document.getElementById("cash").value,
		nonMonetary: document.getElementById("nonMonetaryAmount").value,
		item: document.getElementById("nonMonetaryItem").value,
		receiptCheckBox: document.getElementById("givenReceipt").checked,
		thankYouCheckBox: document.getElementById("givenCard").checked,
		comment: document.getElementById("commentBox").value
	}];//donorFormInfo

	var fs = require('fs');
	var stream = fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".txt"/*, {'flags':'a'}*/);

	stream.once('open', function(fd) {

	stream.write("Full Name: " + donorFormInfo[0].first + " " + donorFormInfo[0].last + "\r\n");
	stream.write("Email Address: " + donorFormInfo[0].email + "\r\n");
	stream.write("Phone Number: " + donorFormInfo[0].phone + "\r\n");
	stream.write("Address: " + donorFormInfo[0].addressInfo + " , " + donorFormInfo[0].cityInfo + " , " + donorFormInfo[0].provinceInfo + " , " + donorFormInfo[0].postal + "\r\n");
	stream.write("Monetary amount donated: $" + donorFormInfo[0].monetary + "\r\n");
	stream.write("Cash: " + donorFormInfo[0].cashInfo);
	stream.write("Cheque: " + donorFormInfo[0].chequeInfo);
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
	//updateNamesArray(donorFormInfo);
	gotoMainMenu();
	

}//infoStorage


// /*
// This function updates the list of names to add any new names submitted.
// */
// function updateNamesArray(){
// 	var stream = fs.createWriteStream("donorNames.txt", {'flags':'a'});
// 	stream.once('open', function(fd) {
// 		stream.write(donorFormInfo[0].first + " " + donorFormInfo[0].last + "\r\n");
// 		stream.end();
// 	}
// }

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
This function checkmarks the "check if given a receipt" checkbox when the "Print Receipt" button is pressed.
Then it calls function createReceipt() which will create the pdf with the receipt for the donation.
*/
function printReceipt() {
	document.getElementById("givenReceipt").checked = true;
	createReceipt();

}//printReceipt

/*
This function takes the information from the fields in the form that is needed to create the receipt. Then
creates a new pdf and writes the information for the receipt in a logical organization in the pdf. So, in 
the end you have a nice looking receipt.
*/
function createReceipt(){
	//Saving the information needed for the receipt.
	var receiptNumber = 1;

	var donorFormInfo = [{
		first: document.getElementById("firstName").value,
		last: document.getElementById("lastName").value,
		phone: document.getElementById("phoneNumber").value,
		addressInfo: document.getElementById("address").value,
		dateOfDonation: document.getElementById("donationDate").value,
		cityInfo: document.getElementById("city").value,
		provinceInfo: document.getElementById("province").value,
		postal: document.getElementById("postalCode").value,
		monetary: document.getElementById("monetaryAmount").value,
		nonMonetary: document.getElementById("nonMonetaryAmount").value,
		chequeInfo: document.getElementById("cheque").value,
		cashInfo: document.getElementById("cash").value,
		item: document.getElementById("nonMonetaryItem").value
	}];//donorFormInfo
	//Create a document
	doc = new PDFDocument
	//This adds in the basic template of the receipt.
	doc.image('assets/images/receiptTemplate.png', {
		fit: [500, 300],
	});
	//This writes the information that changes in the receipt to the pdf at exact locations.
	doc.fontSize(12)
	doc.text(receiptNumber, 480, 130);
	doc.text(donorFormInfo[0].dateOfDonation, 180, 150);
	doc.text(donorFormInfo[0].dateOfDonation, 390, 150);
	doc.text(donorFormInfo[0].first + " " + donorFormInfo[0].last, 370, 166);
	doc.text(donorFormInfo[0].addressInfo, 375, 185);
	doc.text(donorFormInfo[0].cityInfo, 355, 200);
	doc.text(donorFormInfo[0].provinceInfo, 460, 200);
	doc.text(donorFormInfo[0].postal, 385, 220);
	doc.text(donorFormInfo[0].phone, 460, 220);
	doc.text(donorFormInfo[0].monetary, 200, 185);
	doc.text(donorFormInfo[0].nonMonetary, 200, 200);
	//Updates the receipt number
	receiptNumber = receiptNumber + 1;
	//Puts in the checkmark in the appropriate place in the receipt for the type of donation that was given.
	if(document.getElementById("monetaryAmount").value != "" && document.getElementById("monetaryAmount").value != null){
		if(document.getElementById("cheque").checked){
			//CheckMark for if it is paid in cheque
			doc.moveTo(150, 185)                         
			doc.lineTo(155, 190)                            
			doc.lineTo(160, 180)                            
			doc.stroke() 
		}
		if(document.getElementById("cash").checked){
			//CheckMark for it it is paid in cash.
			doc.moveTo(150, 195)                         
			doc.lineTo(155, 200)                            
			doc.lineTo(160, 190)                            
			doc.stroke() 
		}
	}
	if(document.getElementById("nonMonetaryAmount").value != "" && document.getElementById("nonMonetaryAmount").value != null){
		//CheckMark for it the donation was an item.
		doc.moveTo(150, 210)                         
		doc.lineTo(155, 215)                            
		doc.lineTo(160, 205)                            
		doc.stroke() 
	}
	//This is where the pdf is saved and how it is named.
	doc.pipe(fs.createWriteStream("receipt/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + donorFormInfo[0].dateOfDonation + ".pdf"));
	//Finalize PDF file
	doc.end()

	webContents.reloadIgnoringCache();



}//createReceipt()


/*
This function gets called when the user clicks the go back button, confirming if they want to go back
to the main menu.
*/
function goBackToMainMenu(){
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

}//goBackToMainMenu

/*
This function gets called when the user clicks the submit form button,
This creates a pdf report 
*/
function makePDF(donorFormInfo){
	// # Create a document
	doc = new PDFDocument

	//doc.image('../assets/images/logoWithTextUnder.png', 320, 280, scale: 0.25);

	doc.text("Full Name: " + donorFormInfo[0].first + " " + donorFormInfo[0].last);
	doc.text("Email Address: " + donorFormInfo[0].email);
	doc.text("Phone Number: " + donorFormInfo[0].phone);
	doc.text("Address: " + donorFormInfo[0].addressInfo + ", " + donorFormInfo[0].cityInfo + ", " + donorFormInfo[0].provinceInfo + ", " + donorFormInfo[0].postal);
	doc.text("Monetary amount donated: $" + donorFormInfo[0].monetary);
	if(document.getElementById('cash').checked) {
	  doc.text("Cash: Yes");
	  doc.text("Cheque: No");
	}
	if(document.getElementById('cheque').checked) {
	  doc.text("Cash: No");
	  doc.text("Cheque: Yes");
	}
	doc.text("Non-Monetary estimated value: $" + donorFormInfo[0].nonMonetary + " The item donated: " + donorFormInfo[0].item);
	if(document.getElementById('givenReceipt').checked){
		doc.text("Receipt was created.");
	}
	if(document.getElementById('givenCard').checked){
		doc.text("Thank You card was created.");
	}
	doc.text("Comments: " + donorFormInfo[0].comment);

	//doc.rect(doc.x, 0, 600, doc.y).stroke();
	// # Pipe its output somewhere, like to a file or HTTP response
	// # See below for browser usage
	doc.pipe(fs.createWriteStream("donorFormEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".pdf"));

	// # Finalize PDF file
	doc.end()
}


/*
This function gets called when the user clicks the Generates a Thank you card button,
This creates a pdf card
*/
function thankYouClick(donorFormInfo) {

	document.getElementById("givenCard").checked = true;

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
		doc.text("Dear " + donorFormInfo[0].first + " " + donorFormInfo[0].last + "");
		doc.text(" ");
		doc.text(" ");
		doc.text("On behalf of of Camrose Boys And Girls Club, I would like to thank you for your generous donation on " + donorFormInfo[0].donationDate);
		doc.text(" ");
		doc.text("Camrose Boys And Girls Club relies on the generousity of donors such as yourself and is grateful for your support");
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

		//doc.rect(doc.x, 0, 600, doc.y).stroke();
		// # Pipe its output somewhere, like to a file or HTTP response
		// # See below for browser usage
		doc.pipe(fs.createWriteStream("thankYouCardsEntries/" + donorFormInfo[0].last + ", " + donorFormInfo[0].first + ".pdf"));

		// # Finalize PDF file
		doc.end()
	})
}//thank you click

