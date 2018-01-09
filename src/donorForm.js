const{app, BrowserWindow} = require('electron')
const path = require ('path')
const url = require ('url')

function infoStorage() {
			var first = document.getElementById("firstName").value;
			var last = document.getElementById("lastName").value;
			var contact = document.getElementById("contactName").value;
			var email = document.getElementById("emailAddress").value;
			var phone = document.getElementById("phoneNumber").value;
			var addressInfo = document.getElementById("address").value;
			var cityInfo = document.getElementById("city").value;
			var postal = document.getElementById("postalCode").value;
			var monetary = document.getElementById("monetaryAmount").value;
			var nonMonetary = document.getElementById("nonMonetaryAmount").value;
			var item = document.getElementById("nonMonetaryItem").value;
			var comment = document.getElementById("commentBox").value;


			var fs = require('fs');
			var stream = fs.createWriteStream(last + "," + first + ".txt");
			stream.once('open', function(fd) {
			stream.write("Full Name: " + first + " " + last + " Contact Name: " + contact + "\r\n");
			stream.write("Email Address: " + email + " Phone Number: " + phone + "\r\n");
			stream.write("Address: " + addressInfo + " , " + cityInfo + " , " + postal + "\r\n");
			stream.write("Monetary amount donated: $" + monetary + "\n");
			stream.write("Non-Monetary estimated value: $" + nonMonetary + " The item donated: " + item + "\r\n" + "\r\n");
			stream.write("Comments: " + comment);
			stream.end();
			});

		}

		function validatingPhoneNum() {
			var num , phoneAlert;

			//Gets the value inputed in the phone number input box
			num = document.getElementById("phoneNumber").value;

			//If num is not a number or length greater than 11 numbers
			if (isNan(num) || num.length < 10 || num.length > 10) {
				phoneAlert = "Please try again";
			}
			else{
				phoneAlert = "Input Okay";
			}
			document.getElementById().innerHTML = phoneAlert
		}

/*
This function sends the user back to the login screen
*/
function gotoMainMenu() {
  document.getElementById(gotoMainMenu).innerHTML = window.location.replace("selectPersonType.html");
}
