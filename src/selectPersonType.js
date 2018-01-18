/*
This file contains all of the javascript for the selectPersonType.html file
This directs where the user goes and which form they can choose, will send the user to that form.
*/

const remote = require('electron').remote
const main = remote.require('./index.js')
const swal = require('sweetalert2')

/**openNextPage()
This function is called when the buttons Volunteer, Donor and Member are clicked.
It changes the window to the corresponding window to fill out the forms.
**/
function openNextPage(idOfButton) {
	if(idOfButton === 'Donors'){
    	document.getElementById(Donors).innerHTML = window.location.replace("personOrBuisness.html");
	}else if(idOfButton === 'volunteer'){
		document.getElementById(volunteer).innerHTML = window.location.replace("existingOrNewVolunteer.html");
	}else if(idOfButton === 'member'){
		document.getElementById(member).innterHTML = window.location.replace("existingOrNewMember.html");
	}
}//openNextPage

/*
This function is called when the user clicks the quit button, this closes the application
*/
window = remote.getCurrentWindow();
function quitApp(){
	swal({
  title: 'Are you sure you want to quit?',
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
      'The application will be closed',
      'success'
    ) 
    window.close();
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

}//quitApp



/*
	This function asks the user if they want to go back to main menu, then goes to main menu.
*/
function gotoMainMenu() {
	document.getElementById(gotoMainMenu).innerHTML = window.location.replace("selectPersonType.html");
 }//gotoMainMenu