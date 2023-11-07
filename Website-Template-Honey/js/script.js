var xPos = 0;
var yPos = 0;

window.onload = detectCurPos;
function detectCurPos() {
	if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
	changeSquareColor();
	xPos = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	yPos = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

function firstXpos() {
	return 1000;
}

function getXpos() {
	return xPos;
}

function getYpos() {
	return yPos;
}