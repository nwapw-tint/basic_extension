var ar = 255, ag = 0, ab = 0, aa = 100;
var nr = 255, ng = 0, nb = 0, na = 100;

var blackListedSites = [];

document.addEventListener('DOMContentLoaded', () => {
	addClickListener('red_button_allowed', () => {
		ar = 255;
		ag = 0;
		ab = 0;
	}, false);
	addClickListener('yellow_button_allowed', () => {
		ar = 255;
		ag = 255;
		ab = 0;
	}, false);
	addClickListener('green_button_allowed', () => {
		ar = 0;
		ag = 255;
		ab = 0;
	}, false);
	addClickListener('blue_button_allowed', () => {
		ar = 0;
		ag = 0;
		ab = 255;
	}, false);
	addClickListener('magenta_button_allowed', () => {
		ar = 255;
		ag = 0;
		ab = 255;
	}, false);
	addClickListener('custom_button_allowed', () => {
		//Color wheel of some sort?
	}, false);
	
	
	
	addClickListener('red_button_not_allowed', () => {
		nr = 255;
		ng = 0;
		nb = 0;
	}, false);
	addClickListener('yellow_button_not_allowed', () => {
		nr = 255;
		ng = 255;
		nb = 0;
	}, false);
	addClickListener('green_button_not_allowed', () => {
		nr = 0;
		ng = 255;
		nb = 0;
	}, false);
	addClickListener('blue_button_not_allowed', () => {
		nr = 0;
		ng = 0;
		nb = 255;
	}, false);
	addClickListener('magenta_button_not_allowed', () => {
		nr = 255;
		ng = 0;
		nb = 255;
	}, false);
	addClickListener('custom_button_not_allowed', () => {
		//Color wheel of some sort?
	}, false);
	
	
	
	addClickListener('time_submit', () => {
		var input = document.getElementById('time_input').value;
		if (isNaN(input))
			showError("Input is not a number!");
		else if (input.length == 0)
			showError("Input is empty!");
		else {
			setTimeout(() => {
				alert("~" + input + " seconds have passed.");
			}, input * 1000);
		}
	}, false);
	
	
	
	addClickListener('website_submit', () => {
		var input = document.getElementById('website_input').value;
		if (input.length == 0)
			showError("Website is empty!");
		else {
			let alreadyBlocked = false;
			for (let i = 0; i < blackListedSites.length && !alreadyBlocked; i++) {
				if (blackListedSites[i] == input)
					alreadyBlocked = true;
			}
			
			if (alreadyBlocked)
				showError("The website is already blocked!");
			else
				blackListedSites.push(input);
			
			document.getElementById('website_input').value = "";
		}
	}, false);
	
	
	
	addClickListener('start_study_time', () => {
		let str = "Blocked websites:";
		for (let i = 0; i < blackListedSites.length; i++)
			str += "\n" + blackListedSites[i];
		str += "\n\nAllowed website tint: R=" + ar + " G=" + ag + " B=" + ab;
		str += "\n\nNot allowed website tint: R=" + nr + " G=" + ng + " B=" + nb;
		console.log(str);
		
	});
}, false);

function addClickListener(id, callback) {
	document.getElementById(id).addEventListener('click', callback, false);
}

function showError(error) {
	alert("ERROR: " + error);
}