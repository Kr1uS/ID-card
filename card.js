'use strict'

function mouseOnTitle(id) {
	document.getElementById(id).style.backgroundPosition = '100% 100%';
	// document.getElementById(id).style.opacity = '0.75';
}
function mouseOffTitle(id) {
	document.getElementById(id).style.backgroundPosition = '0% 50%';
	// document.getElementById(id).style.opacity = '0.75';
}


function mouseOnMain(id) {
	document.getElementById(id).style.width = '61%';
	document.getElementById(id).style.height = '405px';
	document.getElementById(id).style.boxShadow = '0 0 30px rgba(0,0,0,0.8)';
}
function mouseOffMain(id) {
	document.getElementById(id).style.width = '60%';
	document.getElementById(id).style.height = '400px';
	document.getElementById(id).style.boxShadow = '0 0 10px rgba(0,0,0,0)';
}