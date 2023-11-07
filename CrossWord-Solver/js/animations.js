function onScrollDown() {
  $("header").css("opacity", "0");
  $("main").show();
  // Takes away the padding from the h1 element in the welcome screen. This makes the page not scrollable again.
  $("header h1").css("margin-bottom", "0%");
  
  $("#container").css("margin-top", "0");
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '40') {
    onScrollDown();
  }
}

// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {

  }
	else {
    onScrollDown();
  }
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});
