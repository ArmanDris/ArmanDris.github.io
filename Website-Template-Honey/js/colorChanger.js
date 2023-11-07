function changeSquareColor() {
    var xPos = getXpos();
    var yPos = getYpos();
    var xRgbValue = (xPos * 0.02864583333) + 200;
    var yRgbValue = yPos * 0.255;

    $(".triangle").css("z-index", "1");
    $(".triangle").css("background", gradientGenerator(xPos, 135, "lightblue", 100, 1, 1, 1));
    $("#learnMore a").css("background", gradientGenerator(xPos, 180, "lightblue", 20, 1, -1, 1));
    // Use lightblue as secondary for a clean gradient
}

var deg = "deg";
/*
xPos = x position of cursor
seed = start angle of gradient
multiplier = how much influence the cursor has
num secondary colors = number of secondary colors in the gradient
direction = whitch way the cursor moves the angle of the gradient
*/
function gradientGenerator(xPos, seed, secondaryColor, multiplier, numSecondaryColors, direction, opacity) {
  xPos = xPos - 910;
  if (xPos < 50 ) {
      deg = (seed + (xPos / multiplier * direction)) + "deg";
  }
  else if (xPos >= 50) {
      deg = (seed + (xPos / multiplier * direction)) + "deg";
  }
  var xRgbValue = (xPos * 0.02864583333) + 200;
  var gradient;
  if (numSecondaryColors == 2) {
    gradient = "linear-gradient(" + deg + ", rgba(250, 227, " + xRgbValue + ", " + opacity + "), " + secondaryColor + ",  " + secondaryColor +")";
  }
  else if (numSecondaryColors == 3) {
    gradient = "linear-gradient(" + deg + ", rgba(250, 227, " + xRgbValue + ", " + opacity + "), " + secondaryColor + ",  " + secondaryColor +",  " + secondaryColor +")";
  }
  else if (numSecondaryColors == 4) {
    gradient = "linear-gradient(" + deg + ", rgba(250, 227, " + xRgbValue + ", " + opacity + "), " + secondaryColor + ",  " + secondaryColor +",  " + secondaryColor +",  " + secondaryColor + ")";
  }
  else {
    gradient = "linear-gradient(" + deg + ", rgba(250, 227, " + xRgbValue + ", " + opacity + "), " + secondaryColor + ")";
  }
  return gradient;
}