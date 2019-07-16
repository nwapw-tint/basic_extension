var ar = 255, ag = 0, ab = 0, aa = 100;
var nr = 255, ng = 0, nb = 0, na = 100;

var blackListedSites = [];

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('red_button_allowed').addEventListener('click', () => {
		ar = 255;
		ag = 0;
		ab = 0;
	}, false);
	document.getElementById('yellow_button_allowed').addEventListener('click', () => {
		ar = 255;
		ag = 255;
		ab = 0;
	}, false);
	document.getElementById('green_button_allowed').addEventListener('click', () => {
		ar = 0;
		ag = 255;
		ab = 0;
	}, false);
	document.getElementById('blue_button_allowed').addEventListener('click', () => {
		ar = 0;
		ag = 0;
		ab = 255;
	}, false);
	document.getElementById('magenta_button_allowed').addEventListener('click', () => {
		ar = 255;
		ag = 0;
		ab = 255;
	}, false);
	document.getElementById('custom_button_allowed').addEventListener('click', () => {
		//Color wheel of some sort?
	}, false);
	
	
	
	document.getElementById('red_button_not_allowed').addEventListener('click', () => {
		nr = 255;
		ng = 0;
		nb = 0;
	}, false);
	document.getElementById('yellow_button_not_allowed').addEventListener('click', () => {
		nr = 255;
		ng = 255;
		nb = 0;
	}, false);
	document.getElementById('green_button_not_allowed').addEventListener('click', () => {
		nr = 0;
		ng = 255;
		nb = 0;
	}, false);
	document.getElementById('blue_button_not_allowed').addEventListener('click', () => {
		nr = 0;
		ng = 0;
		nb = 255;
	}, false);
	document.getElementById('magenta_button_not_allowed').addEventListener('click', () => {
		nr = 255;
		ng = 0;
		nb = 255;
	}, false);
	document.getElementById('custom_button_not_allowed').addEventListener('click', () => {
		//Color wheel of some sort?
	}, false);
	
	
	
	document.getElementById('time_submit').addEventListener('click', () => {
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
	
	
	
	document.getElementById('website_submit').addEventListener('click', () => {
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
	
	
	
	document.getElementById('start_study_time').addEventListener('click', () => {
		let str = "Blocked websites:";
		for (let i = 0; i < blackListedSites.length; i++)
			str += "\n" + blackListedSites[i];
		str += "\n\nAllowed website tint: R=" + ar + " G=" + ag + " B=" + ab;
		str += "\n\nNot allowed website tint: R=" + nr + " G=" + ng + " B=" + nb;
		console.log(str);
		
	}, false);
}, false);

function showError(error) {
	alert("ERROR: " + error);
}