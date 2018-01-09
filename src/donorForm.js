const{app, BrowserWindow} = require('electron')
const path = require ('path')
const url = require ('url')

function infoStorage() {
			document.getElementById("test").innerHTML = document.getElementById("firstName").value;
			document.getElementById("test1").innerHTML = document.getElementById("lastName").value;
			document.getElementById("test2").innerHTML = document.getElementById("contactName").value;
			document.getElementById("test3").innerHTML = document.getElementById("emailAddress").value;
			document.getElementById("test4").innerHTML = document.getElementById("phoneNumber").value;
			document.getElementById("test5").innerHTML = document.getElementById("firstName").value;
			document.getElementById("test6").innerHTML = document.getElementById("address").value;
			document.getElementById("test7").innerHTML = document.getElementById("city").value;
			document.getElementById("test8").innerHTML = document.getElementById("postalCode").value;
			document.getElementById("test9").innerHTML = document.getElementById("monetaryAmount").value;
			document.getElementById("test10").innerHTML = document.getElementById("nonMonetaryAmount").value;
			document.getElementById("test11").innerHTML = document.getElementById("nonMonetaryItem").value;

			document.getElementById("test12").innerHTML = document.getElementById("givenRecipt").value;
			document.getElementById("test13").innerHTML = document.getElementById("givenCard").value;

		}
