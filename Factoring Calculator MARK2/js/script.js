document.getElementById("input1").addEventListener("keyup", changeText);

function grabImput() {
    var text = document.getElementById('input1').value;
    if (text !== "") {
    return text;
    }
    else {
        return 0;
    }
}

function convertImput(userImput) {
    var num = Number(userImput);
      return num;
}

function returnNumericalValue() {
  return convertImput(grabImput());
}

function changeText() {
    $('#userImputValue').text(grabImput());
    $('#allFactors').text(getFactors(returnNumericalValue()));
}

function getFactors(num) {
    var str = "0";
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            str += ', ' + i;
        }
    }
    return(str);
}