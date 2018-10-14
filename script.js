document.getElementById("inputs_2").style.display = "none";
document.getElementById("inputs_3").style.display = "none";
document.getElementById("inputs_4").style.display = "none";
document.getElementById("inputs_5").style.display = "none";
document.getElementById("text_5").style.display = "none";
var arrayNumbers = [];
var arrayString = [];
var arraySuperNumber = [];
var arrayDate = [];
var arraySmile = [];
function validate(e)
{
    return (e.charCode == 49 || e.charCode == 50 || e.charCode == 51 || e.charCode == 52 || e.charCode == 53 || e.charCode == 54 || e.charCode == 55 || e.charCode == 56 || e.charCode == 57);
}

var number_1 = Math.floor((Math.random() * 2) + 1);
var number_2 = Math.floor((Math.random() * 2) + 1);
var number_3 = Math.floor((Math.random() * 2) + 1);
var number_4 = Math.floor((Math.random() * 2) + 1);
var number_5 = Math.floor((Math.random() * 2) + 1);
var number_6 = Math.floor((Math.random() * 2) + 1);
var number_7 = Math.floor((Math.random() * 2) + 1);
var number_8 = Math.floor((Math.random() * 2) + 1);
var number_9 = Math.floor((Math.random() * 2) + 1);
var number_10 = Math.floor((Math.random() * 2) + 1);

//Functions for first input field
function myFunction_1() {
    var num_1 = document.getElementById("txt1").value;
    if (num_1 == number_1) {
      arrayNumbers.push(num_1);
    } else {
      document.getElementById('txt1').value = 'X';
    }
}
function myFunction_2() {
    var num_2 = document.getElementById("txt2").value;
    if (num_2 == number_2) {
      arrayNumbers.push(num_2);
    } else {
      document.getElementById('txt2').value = 'X';
    }
}
function myFunction_3() {
    var num_3 = document.getElementById("txt3").value;
    if (num_3 == number_3) {
      arrayNumbers.push(num_3);
    } else {
      document.getElementById('txt3').value = 'X';
    }
}
function myFunction_4() {
    var num_4 = document.getElementById("txt4").value;
    if (num_4 == number_4) {
      arrayNumbers.push(num_4);
    } else {
      document.getElementById('txt4').value = 'X';
    }
}
function myFunction_5() {
    var num_5 = document.getElementById("txt5").value;
    if (num_5 == number_5) {
      arrayNumbers.push(num_5);
    } else {
      document.getElementById('txt5').value = 'X';
    }
}
function myFunction_6() {
    var num_6 = document.getElementById("txt6").value;
    if (num_6 == number_6) {
      arrayNumbers.push(num_6);
    } else {
      document.getElementById('txt6').value = 'X';
    }
}
function myFunction_7() {
    var num_7 = document.getElementById("txt7").value;
    if (num_7 == number_7) {
      arrayNumbers.push(num_7);
    } else {
      document.getElementById('txt7').value = 'X';
    }
}
function myFunction_8() {
    var num_8 = document.getElementById("txt8").value;
    if (num_8 == number_8) {
      arrayNumbers.push(num_8);
    } else {
      document.getElementById('txt8').value = 'X';
    }
}
function myFunction_9() {
    var num_9 = document.getElementById("txt9").value;
    if (num_9 == number_9) {
      arrayNumbers.push(num_9);
    } else {
      document.getElementById('txt9').value = 'X';
    }
}
function myFunction_10() {
    var num_10 = document.getElementById("txt10").value;
    if (num_10 == number_10) {
      arrayNumbers.push(num_10);
    } else {
      document.getElementById('txt10').value = 'X';
    }
    if (arrayNumbers.length >= 6) {
      document.getElementById('text_1').innerHTML = 'YOU WIN!';
      document.getElementById("inputs_2").style.display = "block";
    } else {
      document.getElementById('text_1').innerHTML = 'YOU LOST!';
    }
}
//Functions for second input field
function myFunction_11() {
    var num_11 = document.getElementById("txt11").value;
    if (num_11 === 'Y') {
      arrayString.push(num_11);
    } else {
      document.getElementById('txt11').value = 'X';
    }
}
function myFunction_12() {
    var num_12 = document.getElementById("txt12").value;
    if (num_12 === 'O') {
      arrayString.push(num_12);
    } else {
      document.getElementById('txt12').value = 'X';
    }
}
function myFunction_13() {
    var num_13 = document.getElementById("txt13").value;
    if (num_13 === 'U') {
      arrayString.push(num_13);
    } else {
      document.getElementById('txt13').value = 'X';
    }
}
function myFunction_14() {
    var num_14 = document.getElementById("txt14").value;
    if (num_14 === ' ') {
      arrayString.push(num_14);
    } else {
      document.getElementById('txt14').value = 'X';
    }
}
function myFunction_15() {
    var num_15 = document.getElementById("txt15").value;
    if (num_15 === 'W') {
      arrayString.push(num_15);
    } else {
      document.getElementById('txt15').value = 'X';
    }
}
function myFunction_16() {
    var num_16 = document.getElementById("txt16").value;
    if (num_16 === 'I') {
      arrayString.push(num_16);
    } else {
      document.getElementById('txt16').value = 'X';
    }
}
function myFunction_17() {
    var num_17 = document.getElementById("txt17").value;
    if (num_17 === 'N') {
      arrayString.push(num_17);
    } else {
      document.getElementById('txt17').value = 'X';
    }
}
function myFunction_18() {
    var num_18 = document.getElementById("txt18").value;
    if (num_18 === '!') {
      arrayString.push(num_18);
    } else {
      document.getElementById('txt18').value = 'X';
    }
    if (arrayString.length == 8) {
      document.getElementById('text_2').innerHTML = '124578';
      document.getElementById("inputs_3").style.display = "block";
    } else {
      document.getElementById('text_2').innerHTML = 'YOU LOST!';
    }
}
//Functions for third input field
function myFunction_19() {
    var num_19 = document.getElementById("txt19").value;
    if (num_19 == 1) {
      arraySuperNumber.push(num_19);
    } else {
      document.getElementById('txt19').value = 'X';
    }
}
function myFunction_20() {
    var num_20 = document.getElementById("txt20").value;
    if (num_20 == 4) {
      arraySuperNumber.push(num_20);
    } else {
      document.getElementById('txt20').value = 'X';
    }
}
function myFunction_21() {
    var num_21 = document.getElementById("txt21").value;
    if (num_21 == 2) {
      arraySuperNumber.push(num_21);
    } else {
      document.getElementById('txt21').value = 'X';
    }
}
function myFunction_22() {
    var num_22 = document.getElementById("txt22").value;
    if (num_22 == 8) {
      arraySuperNumber.push(num_22);
    } else {
      document.getElementById('txt22').value = 'X';
    }
}
function myFunction_23() {
    var num_23 = document.getElementById("txt23").value;
    if (num_23 == 5) {
      arraySuperNumber.push(num_23);
    } else {
      document.getElementById('txt23').value = 'X';
    }
}
function myFunction_24() {
    var num_24 = document.getElementById("txt24").value;
    if (num_24 == 7) {
      arraySuperNumber.push(num_24);
    } else {
      document.getElementById('txt24').value = 'X';
    }
    if (arraySuperNumber.length == 6) {
      document.getElementById('text_3').innerHTML = 'George Orwell';
      document.getElementById("inputs_4").style.display = "block";
    } else {
      document.getElementById('text_3').innerHTML = 'YOU LOST!';
    }
}
//Functions for fourth input field
function myFunction_25() {
    var num_25 = document.getElementById("txt25").value;
    if (num_25 == 1) {
      arrayDate.push(num_25);
    } else {
      document.getElementById('txt25').value = 'X';
    }
}
function myFunction_26() {
    var num_26 = document.getElementById("txt26").value;
    if (num_26 == 9) {
      arrayDate.push(num_26);
    } else {
      document.getElementById('txt26').value = 'X';
    }
}
function myFunction_27() {
    var num_27 = document.getElementById("txt27").value;
    if (num_27 == 8) {
      arrayDate.push(num_27);
    } else {
      document.getElementById('txt27').value = 'X';
    }
}
function myFunction_28() {
    var num_28 = document.getElementById("txt28").value;
    if (num_28 == 4) {
      arrayDate.push(num_28);
    } else {
      document.getElementById('txt28').value = 'X';
    }
    if (arrayDate.length == 4) {
      document.getElementById('text_4').innerHTML = 'SMILE!';
      document.getElementById("inputs_5").style.display = "block";
    } else {
      document.getElementById('text_4').innerHTML = 'YOU LOST!';
    }
}
//Functions for fifth input field
function myFunction_29() {
    var num_29 = document.getElementById("txt29").value;
    if (num_29 === ':') {
      arraySmile.push(num_29);
    } else {
      document.getElementById('txt29').value = 'X';
    }
}
function myFunction_30() {
    var num_30 = document.getElementById("txt30").value;
    if (num_30 === ')') {
      arraySmile.push(num_30);
    } else {
      document.getElementById('txt30').value = 'X';
    }
    if (arraySmile.length == 2) {
      window.location.href = "index_2.html";
    } else {
      document.getElementById('text_5').innerHTML = 'YOU LOST!';
    }
}



function nextField(fromTxt, toTxt) {

  var length = fromTxt.value.length;
  var maxLength = fromTxt.getAttribute('maxlength');

  if (length == maxLength) {
    document.getElementById(toTxt).focus();
  }
}

function tryAgain() {
  window.location.href = "index.html";
}
