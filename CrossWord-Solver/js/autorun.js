function loadAnimation() {
  $("::-webkit-scrollbar").css("display", "none");
  $("#book, header h1, header h2").css("opacity", "1");
  $("#book").css("top", "20%");
  $("header h2").css("top", "50%");
  $("header h1").css("top", "55%");
}

loadAnimation();

var count = 0;
window.setInterval(function(){
  if (count == 0) {
    $("#plsScroll p").css("top", "87.5%");
    $("#arrow").css("top", "90.0%");
    count = 1;
  }
  else if (count == 1) {
    $("#plsScroll p").css("top", "87.0%");
    $("#arrow").css("top", "89.5%");
    count = 0;
  }
}, 750);