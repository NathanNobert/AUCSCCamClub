const remote = require('electron').remote
const main = remote.require('./index.js')


function eitherBuisnessOrPerson(idOfButton) {
	if(idOfButton === 'Buisness') {
		document.getElementById(Buisness).innerHTML = window.location.replace("newOrExistingBuisness.html");
	}
	else if(idOfButton === 'Person') {
		document.getElementById(Person).innerHTML = window.location.replace("existingOrNewDonor.html");
	}
}





