function openNextPage(idOfButton) {
	if(idOfButton === 'Donors'){
    	document.getElementById(Donors).innerHTML = window.location.replace("donorForm.html");
	}else if(idOfButton === 'volunteer'){
		document.getElementById(volunteer).innerHTML = window.location.replace("volunteerForm.html")
	}else{
		document.getElementById(member).innterHTML = window.location.replace("memberForm.html")
	}
}