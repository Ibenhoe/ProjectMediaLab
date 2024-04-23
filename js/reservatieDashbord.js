var aantalReservaties = 10;
var aantalReservatiesOpgehaald = 4;

var aantalTeruggebracht = 8;
var aantalTeruggebrachtOpgehaald = 3;

document.getElementById("maxReservaties").innerText = aantalReservaties;
document.getElementById("maxTeruggebracht").innerText = aantalTeruggebracht;

function updateBars() {
  var elem = document.getElementById("myBar");   
  var width = (aantalReservatiesOpgehaald / aantalReservaties) * 100;
  elem.style.width = width + '%'; 
  document.getElementById("label").innerText = aantalReservatiesOpgehaald + ' / ' + aantalReservaties;

  var elem2 = document.getElementById("myBar2");   
  var width2 = (aantalTeruggebrachtOpgehaald / aantalTeruggebracht) * 100;
  elem2.style.width = width2 + '%'; 
  document.getElementById("label2").innerText = aantalTeruggebrachtOpgehaald + ' / ' + aantalTeruggebracht;
}