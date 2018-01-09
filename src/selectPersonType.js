/**openNextPage()
This function is called when the buttons Volunteer, Donor and Member are clicked.
It changes the window to the corresponding window to fill out the forms.
**/
function openNextPage(idOfButton) {
	if(idOfButton === "Donors"){
    	document.getElementById(Donors).innerHTML = window.location.replace("donorForm.html");
	}else if(idOfButton === "volunteer"){
		document.getElementById(volunteer).innerHTML = window.location.replace("volunteerForm.html");
	}else if(idOfButton === "member"){
		document.getElementById(member).innterHTML = window.location.replace("memberForm.html");
	}
}