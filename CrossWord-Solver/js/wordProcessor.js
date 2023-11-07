var checkEn = true;

function switchList() {
  $("header").css("opacity", "1");
  $("main").show();
  // Takes away the padding from the h1 element in the welcome screen. This makes the page not scrollable again.
  $("header h1").css("margin-bottom", "calc(20.5%)");
  
  $("#container").css("margin-top", "100vh");

  if (checkEn === true) {
    checkEn = false;
    $('header h2').text("Vous êtes un défiler vers le bas d'un puzzle de mots croisés fini.");
    $('header h1').text("Cross Word Solver");
    $('#switch p').text("Switch to English");
  }
  else {
    checkEn = true;
    $('header h2').text("One scroll away from a finished cross word puzzle.");
    $('header h1').text("Cross Word Solver");
    $('#switch p').text("Switch to French");
    $('main input').val("ex__ple");
    $('#matches').text('example');
  }

  $('main input').val("ex__ple");
  searchWord();
}


function checkWord(wrd) {
  var str = $('main input').val();
  // Check if the lengths are the same
  if (str.length != wrd.length) {
      return false;
  }

  // Cycle through each letter and check if they are the same
  for (var j = 0; j < str.length; j++) {
      if (str[j] != wrd[j] && str[j] != '_') {
          return false;
      }
  }
  
  return true;
}


function searchWord()
{
  console.log("searched word");
    $('#matches').text('');
    // Cycle through all words in word list
    if (checkEn === true) {
      for (var i = 0; i < wrdLstEn.length; i++) {
        if (checkWord(wrdLstEn[i]) == true) {
          $('#matches').text( $('#matches').text() + wrdLstEn[i] + ' ');
        }
      }
    }
    else {
      for (var i = 0; i < wrdLstFr.length; i++) {
        if (checkWord(wrdLstFr[i]) == true) {
          $('#matches').text( $('#matches').text() + wrdLstFr[i] + ' ');
        }
      }
    }
}

searchWord();